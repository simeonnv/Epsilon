"use server"
import { verifyCredentails } from "./verifyCredentials";
import { RecordId } from "surrealdb.js";
import { initDb } from "../DB/DBConnect";
import { hash, compare } from 'bcryptjs';

export async function signupAuth(username: string, password: string): Promise<string>
{
    const db = await initDb()
    
    const verification: boolean[] = verifyCredentails(username, password)
    if( verification[0] && verification[1] )
        return "incorrect credentials"
    if (db == undefined)
        return "something failed"
    if ( (await db.select(new RecordId("account", username))).length != 0 )
        return "account already exists"

    const hashedPassword = await hash(password, 80);

    await db.let('account', {
        username: username,
        password: hashedPassword,
    });



    await db.query(`

        CREATE account:$account.username SET
            username = $account.username,
            password = $account.password,
            profilePicture = {}
        ;
        
    `);


    db.unset("account")

    return "success"
}
