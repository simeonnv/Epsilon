"use server"

import { Surreal } from "surrealdb.js";
import initTables from "./initTables";
import queryStartData from "./queryStartData";

let db: Surreal | undefined;

export async function initDb(): Promise<Surreal | undefined> {
    if (db) return db;
    db = new Surreal();
    try {
        console.log("init")
        await db.connect('http://localhost:8080/rpc', {
            namespace: 'Epsilon',
	        database: 'Epsilon',
            auth: {
                username: 'root',
                password: 'root',
            },
        });

        try {
            initTables(db)
            queryStartData(db)
        }
        catch(err)
        {
            console.error(err, "kys nigga")
        }
        

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