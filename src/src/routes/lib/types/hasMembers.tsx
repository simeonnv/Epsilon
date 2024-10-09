import { RecordId } from "surrealdb"


export type hasMembers = {
    joinDate: Date,
    role: string,
    id: RecordId,
    in: RecordId,
    out: RecordId
}