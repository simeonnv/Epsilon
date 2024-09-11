

import { Surreal } from "surrealdb.js";


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

        await db.let('account', {
            username: "Admin",
            password: "admin"
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