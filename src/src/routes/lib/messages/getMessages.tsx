import { RecordId } from "surrealdb";
import { getSessionJson } from "../auth/sessionAuth";
import { initDb } from "../DB/DBConnect";
import { textChannels } from "../types/textChannels";
import { messages } from "../types/messages";

export default async function getMessages(channelIdRaw: string): Promise<messages[] | false> {

    const db = await initDb()
    if (!db)
        return false
    const session = await getSessionJson();
    if (session.username === undefined || session.key === undefined || session.id === undefined)
        return false

    const channelId = new RecordId("textChannels", channelIdRaw)

    const res = await db.query<[messages[]]>(`
        
        SELECT * FROM messages WHERE
            inChannel = $channelId
        ;
        
    `, {channelId})

        console.log("get message ", res)

    return res[0]
}