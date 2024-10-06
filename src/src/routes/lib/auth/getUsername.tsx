"use server"

import { getSession } from "./sessionAuth";

export default async function getUsername(): Promise<string>
{
    const session = await getSession();
    return session.data.username;
}