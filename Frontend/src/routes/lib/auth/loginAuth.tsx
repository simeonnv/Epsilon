import { getDb, initDb } from "../DB/DBConnect"
import { account } from "../types/account"
import { verifyCredentails } from "./verifyCredentials"

const db = await initDb()

async function querryAccount(username: string): Promise<[account] | string>
{
    try {
        if (!db)
            return "something went wrong"      

        const res = await db.query<[account]>(`
             SELECT * FROM account WHERE username = $username; 
        `, {username})
        
        console.log(res, "blej")
        
        if (!res[0])
            return "account does not exist"
    
        

        return res

    } catch(err) {
        console.error(err, "loginAuth")
        return "something went wrong"  
    }
    
}



export default async function loginAuth(username: string, password: string,): Promise<string>
{
    const verification: boolean[] = verifyCredentails(username, password)

    if( !(verification[0] && verification[1]) )
        return "incorrect credentials"

    if (!db)
        return "something failed"

    const res = await querryAccount(username)

    if( typeof(res) === "string")
        return res
    
    if (!(username === res[0].username && password === res[0].password))
        return "credentials are incorrect"
    
    // create token logic

    return "success" //send token
}