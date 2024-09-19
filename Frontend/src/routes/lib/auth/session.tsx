import { redirect } from "@solidjs/router";
import {Surreal, RecordId} from "surrealdb";
import { useSession } from "vinxi/http";
import * as crypto from "node:crypto";
import { account } from "../types/account";
import { initDb } from "../DB/DBConnect";

export type UserSession = {
    userId?: number;
};

async function getSession() {
    return await useSession({
      password: "f;xRhcmFlYc8,(fv-IaW;jWdaEd.D.a/De1D===D==1@-0$*XRQEeV35QO.j1IX0yD}MRZay_yv)"
    });
}

async function authToken() {
    const session = await getSession();
    if (session.data.userId)
        return
    else
    {
        await session.update((d: UserSession) => (d.userId = undefined));
        throw redirect("/login");
    }   
}

async function storeToken(userId: RecordId): Promise<string> {
    const db = await initDb()
    if (!db)
        return "something went wrong"
    const token = crypto.randomBytes(120).toString('hex');
    const res = await db.query(`
        
        LET $Token = (CREATE tokens SET
            createdAt = time::now(),
            role = "user",
            token = $token
        );

        RELATE $userId->hasToken->$Token SET createdAt = time::now();

    `, {token, userId} )
    return token;
}

// use with "use server" statment
async function createToken(db: Surreal, userId: RecordId) {
    const session = await getSession();
    
    "use server"
    const res = await storeToken(userId)
    
    if (res === "something went wrong")
    {
        throw "blehh session"
        return "error"
    }
    session.data.userId = res;
    return "success"
        
}


