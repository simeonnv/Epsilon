import { RecordId } from "surrealdb"

export type account = {
    id: RecordId,
    status: string,
    username: string,
    password: string,
    role: string,
    pfp: RecordId
}

export type accountShortened = {
    username: string,
    status: string,
    pfp: {
        type: string,
        base64: string
    } | undefined,
}