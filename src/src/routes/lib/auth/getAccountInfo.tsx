"use server"

import { StringRecordId } from "surrealdb";
import { initDb } from "../DB/DBConnect";
import { getSession, getSessionJson } from "./sessionAuth";
import { accounts, accountsExtended } from "../types/accounts";

export default async function getAccountInfo(): Promise<accountsExtended | undefined>
{

    const session = await getSessionJson();

    if (!session)
        return

    if (!session.id)
        return

    const db = await initDb()
    if (!db)
        return

    const res = await db.query<[accountsExtended[]]>(`
        
        SELECT username, status, role, createdAt, pfp.base64, pfp.type FROM $userId;

    `, { userId: new StringRecordId(session.id) }) 

    return res[0][0]
}