import { RecordId } from "surrealdb"

export type account = {
    id: RecordId,
    status: string,
    username: string,
    password: string,
    role: string,
    pfp: RecordId
}

export type accountExtended = {
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

export type accountShortened = {
    username: string,
    status: string,
    pfp: {
        type: string,
        base64: string
    } | undefined,
}