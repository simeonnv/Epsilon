import { Surreal } from "surrealdb.js";

export default async function initTables(db: Surreal): Promise<boolean> {
    const res = await db.query(`
        
        // account
        DEFINE TABLE account SCHEMALESS;
        DEFINE FIELD username ON TABLE account TYPE string;
        DEFINE FIELD password ON TABLE account TYPE string;

    `)
    if (res)
        return true
    else
        return false
}