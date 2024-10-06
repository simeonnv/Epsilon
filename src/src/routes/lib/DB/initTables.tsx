import { Surreal } from "surrealdb";

export default async function initTables(db: Surreal): Promise<boolean> {
    const res = await db.query(`
        
        DEFINE TABLE IF NOT EXISTS account SCHEMALESS;
        DEFINE FIELD IF NOT EXISTS username ON TABLE account TYPE string;
        DEFINE FIELD IF NOT EXISTS password ON TABLE account TYPE string;
        DEFINE FIELD IF NOT EXISTS role ON TABLE account TYPE string;

        DEFINE TABLE IF NOT EXISTS tokens SCHEMAFULL;
        DEFINE FIELD IF NOT EXISTS createdAt ON TABLE tokens TYPE datetime READONLY;
        DEFINE FIELD IF NOT EXISTS role ON TABLE tokens TYPE string;
        DEFINE FIELD IF NOT EXISTS token ON TABLE tokens TYPE string READONLY;

        DEFINE TABLE IF NOT EXISTS hasToken SCHEMAFULL TYPE RELATION IN account OUT tokens;
        DEFINE FIELD IF NOT EXISTS createdAt ON TABLE hasToken TYPE datetime READONLY;

        DEFINE TABLE IF NOT EXISTS files SCHEMAFULL;
        DEFINE FIELD IF NOT EXISTS createdAt ON TABLE files TYPE datetime READONLY;
        DEFINE FIELD IF NOT EXISTS name ON TABLE files TYPE string READONLY;
        DEFINE FIELD IF NOT EXISTS type ON TABLE files TYPE string READONLY;
        DEFINE FIELD IF NOT EXISTS size ON TABLE files TYPE string READONLY;
        DEFINE FIELD IF NOT EXISTS base64 ON TABLE files TYPE string READONLY;

        DEFINE TABLE IF NOT EXISTS hasPFP SCHEMAFULL TYPE RELATION IN account OUT files;

        DEFINE FIELD IF NOT EXISTS createdAt ON TABLE hasPFP TYPE datetime READONLY;


    `)
    if (res)
        return true
    else
        return false
}