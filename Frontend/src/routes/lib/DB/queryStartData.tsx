import { Surreal } from "surrealdb.js";

export default async function queryStartData(db: Surreal): Promise<boolean> {

    const res = await db.query(`
        
        CREATE account:admin SET
            username = "admin",
            password = "admin",
            profilePicture = {}
        ;
        
    `)
    
    console.log(res)

    await db.unset("account")

    if (res)
        return true
    else 
        return false
}