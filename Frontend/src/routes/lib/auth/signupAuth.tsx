"use server"
import { verifyCredentails } from "./verifyCredentials";
import { RecordId } from "surrealdb";
import { getDb, initDb } from "../DB/DBConnect";


export async function signupAuth(username: string, password: string): Promise<string>
{
    let db = await initDb()
    const verification: boolean[] = verifyCredentails(username, password)
    
    if( !(verification[0] && verification[1]) )
        return "incorrect credentials"
    
    if (db == undefined)
        return "something failed"

    await db.let('account', {
        username: username,
    });

    const res:any = await db.query(` SELECT * FROM account WHERE username = $account.username `)
    
    if(await res[0].length != 0)
        {await db.unset("account"); return "account already exists"}
    else
        await db.unset("account")


    await db.let('account', {
        username: username,
        password: password,
    });


    await db.query(`

        CREATE account SET
            username = $account.username,
            password = $account.password,
            role = "user",
            profilePicture = {}
        ;
        
    `);

    await db.unset("account")

    return "success"
}
