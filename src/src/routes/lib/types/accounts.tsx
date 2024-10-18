import { RecordId } from "surrealdb"

export type accounts = {
    id: RecordId,
    status: string,
    username: string,
    password: string,
    role: string,
    pfp: RecordId
}

export type accountsExtended = {
    id: RecordId,
    status: string,
    username: string,
    password: string,
    role: string,
    pfp: {
        type: string,
        base64: string
    } | undefined,
}

export type accountsShortened = {
    username: string,
    status: string,
    pfp: {
        type: string,
        base64: string
    } | undefined,
}