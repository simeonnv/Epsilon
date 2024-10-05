import { RecordId } from "surrealdb"
import { getDb, initDb } from "../DB/DBConnect"
import { account } from "../types/account"
import { verifyCredentails } from "./verifyCredentials"
import { createToken } from "./sessionAuth"


async function querryAccount(username: string): Promise<[account[]] | string>
{
    const db = await initDb()
    if (!db)
        return "something went wrong" 

    try {
        if (!db)
            return "something went wrong"      

        const res = await db.query<[account[]]>(`
             SELECT * FROM account WHERE username = $username; 
        `, {username})
        
        console.log(res, "blej")
        
        if (!res[0])
            return "account does not exist"
    
        console.log("huh")

        return res

    } catch(err) {
        console.error(err, "loginAuth")
        return "something went wrong"  
    }
    
}



export default async function loginAuth(username: string, password: string,): Promise<string>
{
    const db = await initDb()
    if (!db)
        return "something went wrong" 
    const verification: boolean[] = verifyCredentails(username, password)

    if( !(verification[0] && verification[1]) )
        return "incorrect credentials"

    if (!db)
        return "something failed"

    const res = await querryAccount(username)

    if( typeof(res) === "string")
        return res
    
    console.log(username, res[0][0].username, "1")
    console.log(password, res[0][0].password, "2")
    console.log(res[0][0], "3")
    console.log(res[0][0].id, "4")

    if (!(username === res[0][0].username && password === res[0][0].password))
        return "credentials are incorrect"
    
    const userId: RecordId= res[0][0].id;

    const status = await createToken(userId.toString())
    
    if (status === "success")
        return "success" 
    else
        return "error"
}