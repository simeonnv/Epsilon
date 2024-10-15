import { initDb } from "../DB/DBConnect";
import { RecordId, StringRecordId } from "surrealdb";
import { accountShortened } from "../types/account";
import { group } from "../types/group";

export default async function getGroup(id :string): Promise<group | undefined>
{
    const db = await initDb()
    if (!db)
        return undefined;

    const groupId = new RecordId("groups", id)

    const res = await db.query<[group[]]>(`
        
        SELECT * FROM $groupId;
        
    `, { groupId })

    if (!res)
        return undefined

    if (!res[0])
        return undefined

    return res[0][0];

}