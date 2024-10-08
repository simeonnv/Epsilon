import { RecordId } from "surrealdb"


export type files = {
    id: RecordId,
    base64: string,
    createdAt: Date,
    name: string,
    size: number,
    type: string
}