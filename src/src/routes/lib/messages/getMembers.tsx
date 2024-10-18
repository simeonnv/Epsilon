import { initDb } from "../DB/DBConnect";
import { RecordId, StringRecordId } from "surrealdb";
import { accountsShortened } from "../types/accounts";

export default async function getMembers(id :string): Promise<accountsShortened[] | undefined>
{
    const db = await initDb()
    if (!db)
        return undefined;

    const groupId = new RecordId("groups", id)

    const res = await db.query<[accountsShortened[]]>(`
        
        SELECT username, status, pfp.base64, pfp.type FROM accounts WHERE <-hasMembers<-(groups WHERE id == $groupId);
        
    `, { groupId })

    if (!res)
        return undefined

    if (!res[0])
        return undefined

    return res[0];

}