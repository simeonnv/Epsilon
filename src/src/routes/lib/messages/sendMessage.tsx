import { RecordId, StringRecordId } from "surrealdb"
import { initDb } from "../DB/DBConnect"
import { textChannels } from "../types/textChannels"
import { getSessionJson } from "../auth/sessionAuth"
import { messages } from "../types/messages"

export default async function sendMessage(message: string, channelIdRaw: string): Promise<boolean> {

    const db = await initDb()
    if (!db)
        return false
    const session = await getSessionJson();
    if (session.username === undefined || session.key === undefined || session.id === undefined)
        return false


    const channelId = new RecordId("textChannels", channelIdRaw)

    console.log("SEND NEGGASE ", message)
    console.log("SEND NEGGASE ", channelId)
    console.log("SEND NEGGASE ", session.id)

    const res = await db.query<[messages[]]>(`
        
        CREATE messages SET
            createdAt = time::now(),
            deleted = false,
            inChannel = $channelId,
            sentBy = $userId,
            text = $message
        ;
        
    `, {message: message, channelId: channelId, userId: new StringRecordId(session.id)})
        
    return true
}