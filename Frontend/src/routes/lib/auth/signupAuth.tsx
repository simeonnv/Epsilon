
import { verifyCredentails } from "./verifyCredentials";
import { RecordId } from "surrealdb.js";
import { initDb } from "../DB/DBConnect";


export async function signupAuth(username: string, password: string): Promise<string>
{
    const db = await initDb()
    console.log("reak")
    console.log(db)
    const verification: boolean[] = verifyCredentails(username, password)
    if( verification[0] && verification[1] )
        return "incorrect credentials"
    console.log("reak", 1)
    if (db == undefined)
        return "something failed"
    console.log("reak", 2)
    if ( (await db.select(new RecordId("account", username))) != undefined )
        return "account already exists"
    console.log("reak", 3)

    await db.let('account', {
        username: username,
        password: password,
    });
    console.log("reak", 4)


    await db.query(`

        DEFINE TABLE account SCHEMALESS

        CREATE account:$account.username SET
            username = $account.username,
            password = $account.password,
            profilePicture = {}
        ;
        
    `);
    console.log("reak", 5)

    await db.unset("account")
    console.log("reak", 6)
    return "success"
}
