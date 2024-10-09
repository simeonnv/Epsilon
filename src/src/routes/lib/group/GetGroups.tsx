import { StringRecordId } from "surrealdb";
import { getSessionJson } from "../auth/sessionAuth";
import { initDb } from "../DB/DBConnect"
import { groupExtended } from "../types/group";

export default async function GetGroups(): Promise<groupExtended[] | undefined> {
    const db = await initDb()

    if (!db)
        return undefined;

    const session = await getSessionJson();

    if (session.id === undefined || session.key === undefined || session.username === undefined)
        return undefined;

    const res = await db.query<[groupExtended[]]>(`
        SELECT *, icon.base64, icon.type FROM groups WHERE ->hasMembers->(account WHERE id == $userId);
    `, {userId: new StringRecordId(session.id)})

    console.log(res)

    if (res[0].length == 0)
        return undefined


    return res[0]

}

