"use server"

import { RecordId } from "surrealdb.js";
import { initDb } from "../DB/DBConnect";
import { hash, compare } from 'bcryptjs';

async function signup(username: string, password: string): Promise<string>
{
    const db = await initDb()
    if (username.length < 7 || username.length > 15)
        return "invalid username length"
    if (password.length < 7 || username.length > 20)
        return "invalid password length"
    if (db == undefined)
        return "something failed"
    if ( (await db.select(new RecordId("account", username))).length != 0 )
        return "account already exists"

    const hashedPassword = await hash(password, 80);
    const account = db.create(new RecordId("account", username), {
        username: username,
        password: hashedPassword,
        

    })
    


    return "success"
}
