import { RecordId } from "surrealdb"


export type hasMembers = {
    joinDate: Date,
    id: RecordId,
    in: RecordId,
    out: RecordId
}