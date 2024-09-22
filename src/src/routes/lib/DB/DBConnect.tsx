import { Surreal } from "surrealdb";
import initTables from "./initTables";
import queryStartData from "./queryStartData";

let db: Surreal | undefined;

export async function initDb(): Promise<Surreal | undefined> {
    if (db) {
        console.log("DB already initialized, reusing the existing connection.");
        return db;
    }

    try {
        console.log("Initializing a new DB connection...");
        db = new Surreal();
        await db.connect('http://localhost:8080/rpc', {
            namespace: 'Epsilon',
            database: 'Epsilon',
            auth: {
                username: 'root',
                password: 'root',
            },
        });

        try{
            initTables(db)
            queryStartData(db)
        }catch(err){
            console.log(err, "DB")
        }
        
        console.log("DB connection established.");
        return db;
    } catch (err) {
        console.error("Failed to initialize DB:", err);
        db = undefined;
        return undefined;
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