import { RecordId } from "surrealdb"


export type hasToken = {
    createdAt: Date,
    id: RecordId,
    in: RecordId,
    out: RecordId
}