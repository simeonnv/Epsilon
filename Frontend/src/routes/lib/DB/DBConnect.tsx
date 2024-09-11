"use server"

import { Surreal } from "surrealdb.js";
import { hash, compare } from 'bcryptjs';

let db: Surreal | undefined;

export async function initDb(): Promise<Surreal | undefined> {
    if (db) return db;
    db = new Surreal();
    try {
        await db.connect("http://localhost:8080/rpc");
        await db.use({ namespace: "Epsilon", database: "Epsilon" });

        await db.let('account', {
            username: "Admin",
            password: await hash("admin", 80)
        });
        try {

            await db.query(`

            CREATE account:$account.username SET
                username = $account.username,
                password = $account.password,
                profilePicture = {}
            ;
            
            `);

        }
        catch(err){}
        

        db.unset("account")
        
        return db;
    } catch (err) {
        console.error("Failed to connect to SurrealDB:", err);
        throw err;
    }
}

export async function closeDb(): Promise<void> {
    if (!db) return;
    await db.close();
    db = undefined;
}

export function getDb(): Surreal | undefined {
    return db;
}