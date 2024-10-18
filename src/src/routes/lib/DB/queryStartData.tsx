import { Surreal } from "surrealdb";



export default async function queryStartData(db: Surreal): Promise<boolean> {


    try {
        const res = await db.query(`
        
            CREATE accounts:admin SET
                username = "admin",
                password = "admin",
                role = "admin",
                profilePicture = {}
            ;

        `)

        if (res)
            return true
        else 
            return false
    } catch{
        return false
    }
    
}