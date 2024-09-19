import { RecordId } from "surrealdb"

export type account = {
    id: RecordId,
    username: string,
    password: string,
    profilePicture: any
}