"use server"
import { redirect } from "@solidjs/router";
import {RecordId, StringRecordId} from "surrealdb";
import * as crypto from "node:crypto";
import { account } from "../types/account";
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

export async function getSessionJson() {
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


export async function authToken() {
    const session = await getSession();

    console.log("before ", session.data.key);
    console.log("before ",session.data.id);
    console.log("before ",session.data.username);
    
    if (session.data.key && session.data.id && session.data.username) {
        return true;
    }

    console.log("after ", session.data.key);
    console.log("after ", session.data.id);
    console.log("after ", session.data.username);

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

