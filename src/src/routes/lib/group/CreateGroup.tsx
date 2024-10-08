

import { StringRecordId } from "surrealdb"
import { getSession, getSessionJson, UserSession } from "../auth/sessionAuth"
import { initDb } from "../DB/DBConnect"
import { fileToBase64File } from "../encryption/base64File"
import { base64File } from "../types/base64File"
import { files } from "../types/files"
import { group } from "../types/group"
import isImage from "../types/isImage"
import { hasMembers } from "../types/hasMembers"

export default async function CreateGroup(name: string, description: string, icon: File | null): Promise<"success" | "error">
{

    const db = await initDb()
    if (!db)
        return "error" 



    if (icon === null && !isImage(icon))
    {
        await db.query(`
            
            CREATE groups SET 
                name = $name,
                description = $description,
                createdAt = time::now(),
                icon = NONE
            ;

        `, {name, description})
    }
    else
    {
        if (icon === null)
            return "error" //ts kys
        

        const iconBase64: base64File = await fileToBase64File(icon);

        const session = await getSessionJson();

        console.log("id ", await session.id)
        console.log("key ", await session.key)
        console.log("username ", await session.username)

        if (session.username === undefined || session.key === undefined || session.id === undefined)
            return "error"

        console.log("json ", session)


        console.log(typeof(iconBase64.base64))

        const res = await db.query<[undefined, undefined, hasMembers[]]>(`

            LET $iconRes = (

                CREATE files SET
                    base64 = $iconBase64.base64,
                    createdAt = time::now(),
                    name = $iconBase64.name,
                    size = $iconBase64.size,
                    type = $iconBase64.type
            
            )[0];
            
            LET $groupRes = (

                CREATE groups SET 
                    name = $name,
                    description = $description,
                    createdAt = time::now(),
                    icon = $iconRes.id
            
            );


            RELATE $groupRes->hasMembers->$userId SET joinDate = time::now();

        `, {name, description, iconBase64, userId: new StringRecordId(session.id)})

        console.log(res)
    }


    return "success"
}