"use server"
import { redirect } from "@solidjs/router";
import {RecordId, StringRecordId} from "surrealdb";
import * as crypto from "node:crypto";
import { account } from "../types/account";
import { initDb } from "../DB/DBConnect";
import { useSession } from "vinxi/http";
import { tokens } from "../types/tokens";
import { hasToken } from "../types/hasToken";



export type UserSession = {
    key?: string,
    name?: string
};

export async function getSession() {
    try {
        const session = await useSession({
            password: "f;xRhcmFlYc8,(fv-IaW;jWdaEd.D.a/De1D===D==1@-0$*XRQEeV35QO.j1IX0yD}MRZay_yv)"
        });
        console.log("Session retrieved:", session);
        return session;
    } catch (error) {
        console.error("Error retrieving session:", error);
        throw error;
    }
}


export async function authToken() {
    const session = await getSession();
    
    if (session.data.key && session.data.name) {
        return true;
    }

    console.log(session.data.key);
    console.log(session.data.name);

    // If session is invalid, update and redirect
    await session.update((d: UserSession) => {
        d.key = undefined;
        d.name = undefined;
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
        const res = await db.query<[hasToken[]]>(`
            LET $tokenRes = (CREATE tokens SET
                createdAt = time::now(),
                role = "user",
                token = $Token
            );
            RELATE $userId->hasToken->$tokenRes SET createdAt = time::now();
        `, { Token, userId: new StringRecordId(userId) });

        console.log("Token creation and relationship success", res[0]);

        const userSession: UserSession = {
            key: Token,
            name: userId
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

        await session.update((d: UserSession) => (d.key = res.key));
        await session.update((d: UserSession) => (d.name = res.name));
        
        return "success"
    } catch (err)
    {
        console.error(err, "CREATE TOKEN")
        throw "blehh"
        return
    }
    
        
}

