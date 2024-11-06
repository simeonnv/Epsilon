import { RecordId } from "surrealdb"

export type messages = {
    attachment: RecordId | undefined,
    createdAt: Date,
    deleted: boolean,
    inChannel: RecordId,
    sentBy: RecordId
    text: string | undefined
}