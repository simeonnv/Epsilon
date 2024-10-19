import { initDb } from "../DB/DBConnect";
import { RecordId, StringRecordId } from "surrealdb";
import { group } from "../types/group";
import { textChannels } from "../types/textChannels";

export default async function getTextChannels(id :string): Promise<textChannels[] | undefined>
{
    const db = await initDb()
    if (!db)
        return undefined;

    const groupId = new RecordId("groups", id)

    const res = await db.query<[textChannels[]]>(`
        
        SELECT * FROM textChannels WHERE group = $groupId;
        
    `, { groupId })

    if (!res)
        return undefined

    if (!res[0])
        return undefined

    return res[0];

}