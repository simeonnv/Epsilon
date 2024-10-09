import { RecordId, StringRecordId } from "surrealdb";
import { authToken, getSessionJson } from "../auth/sessionAuth"
import { initDb } from "../DB/DBConnect"




export default async function DeleteGroupReq(groupId: string): Promise<boolean>
{

    const db = await initDb()
    if (!db)
        return false

    const session = await getSessionJson();

    if (session.id === undefined || session.key === undefined || session.username === undefined)
        return false;

    if (!await authToken())
        return false;

    const group = new RecordId("groups", groupId)

    const res = await db.query<[undefined, string | undefined]>(`
        
        LET $ROLE = (SELECT role FROM hasMembers WHERE ->(account WHERE id == $userId) and <-(groups WHERE id == $groupId))[0].role;

        RETURN $ROLE;

        IF $ROLE = "admin" {
            DELETE hasMembers WHERE <-(groups WHERE id = $groupId)
        };
        
        IF $ROLE = "admin" {
            DELETE $groupId
        };
            
        

    `, {userId: new StringRecordId(session.id), groupId: group})

    console.log("NZZZZZZ", res)

    return true
}