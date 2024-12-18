import { initDb } from "../DB/DBConnect";
import { RecordId, StringRecordId } from "surrealdb";
import { group } from "../types/group";
import { voiceChannels } from "../types/voiceChannels";

export default async function getVoiceChannels(id :string): Promise<voiceChannels[] | undefined>
{
    const db = await initDb()
    if (!db)
        return undefined;

    const groupId = new RecordId("groups", id)

    const res = await db.query<[voiceChannels[]]>(`
        
        SELECT * FROM voiceChannels WHERE group = $groupId;
        
    `, { groupId })

    if (!res)
        return undefined

    if (!res[0])
        return undefined

    return res[0];

}