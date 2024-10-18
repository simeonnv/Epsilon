"use server"
import { redirect } from "@solidjs/router";
import {RecordId, StringRecordId} from "surrealdb";
import * as crypto from "node:crypto";
import { accounts } from "../types/accounts";
import { initDb } from "../DB/DBConnect";
import { useSession } from "vinxi/http";
import { tokens } from "../types/tokens";
import { hasToken } from "../types/hasToken";

const SECRET = "f;xRhcmFlYc8,(fv-IaW;jWdaEd.D.a/De1D===D==1@-0$*XRQEeV35QO.j1IX0yD}MRZay_yv)";

export type UserSession = {
    key?: string,
    id?: string,
    username?: string
};

export async function getSession() {
    try {
        const session = await useSession({
            password: SECRET
        });
        console.log("Session retrieved:", session);
        return session;
    } catch (error) {
        console.error("Error retrieving session:", error);
        throw error;
    }
}

export async function getSessionJson(): Promise<UserSession> {
    try {
        const session = await useSession({
            password: SECRET
        });
        console.log("Session retrieved:", session);

        const userSession: UserSession = {
            key: await session.data.key,
            id: await session.data.id,
            username: await session.data.username
        }

        return userSession;
    } catch (error) {
        console.error("Error retrieving session:", error);
        throw error;
    }
}


export async function authToken(): Promise<boolean> {

    
    const session = await getSession();
    
    if (session.data.key && session.data.id && session.data.username) {

        type tokens = {
            token: string,
            createdAt: Date
        }

        const db = await initDb()

        if(!db)
            return false

        console.log("nz zz", session.data.key)

        const res = await db.query<[tokens[] | []]>(`
        
            SELECT token, createdAt FROM tokens WHERE <-hasToken<-(accounts WHERE id == $userId) and token == $Token and (createdAt > (time::now() - 14w));
        
        `, {userId: new StringRecordId(session.data.id), Token: session.data.key})

        console.log("nz RAAH", res)
        

        if (!res[0][0])
        {
            
            await session.update((d: UserSession) => {
                d.key = undefined;
                d.id = undefined;
                d.username = undefined;
            });

            await session.clear();

            console.log("blehh")

            return false
        }
        
        return true;
        
    }


    // If session is invalid, update and redirect
    await session.update((d: UserSession) => {
        d.key = undefined;
        d.id = undefined;
        d.username = undefined;
    });
    await session.clear();

    return false;
    
}






async function storeTokenDB(userId: string): Promise<UserSession | "something went wrong"> {
    const db = await initDb();
    if (!db) {
        console.error("DB initialization failed in storeToken");
        return "something went wrong";
    }

    try {
        const Token = await crypto.randomBytes(120).toString('hex');
        
        type username = {
            username: string
        }

        const res = await db.query<[undefined[], hasToken[], username[]]>(`
            
            LET $tokenRes = (CREATE tokens SET
                createdAt = time::now(),
                role = "user",
                token = $Token
            );
            
            RELATE $userId->hasToken->$tokenRes SET createdAt = time::now();
            
            SELECT username FROM $userId;

        `, { Token, userId: new StringRecordId(userId) });

        console.log("Token creation and relationship success", res[0]);
        console.log("I ", res[0]);
        console.log("II ", res[1]);
        console.log("III ", res[2]);


        const userSession: UserSession = {
            key: Token,
            id: userId,
            username: res[2][0].username
        }

        return userSession;
    } catch (error) {
        console.error("Error during token creation or relationship", error);
        return "something went wrong";
    }
}


export async function createToken(userId: string) {
    try {
        console.log("bluej", "1")
        const session = await getSession();
        
        const res = await storeTokenDB(userId)
        console.log(res, "muhehe")
        
        if (res === "something went wrong")
        {
            console.error("blehh session")
            return "error"
        }

        await session.update((d: UserSession) => {
            d.key = res.key;
            d.id = res.id; 
            d.username = res.username
        });
        
        return "success"
    } catch (err)
    {
        console.error(err, "CREATE TOKEN")
        throw "blehh"
        return
    }
    
        
}

