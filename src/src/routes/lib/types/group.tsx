import { RecordId } from "surrealdb"

export type group = {
    id: RecordId,
    name: string,
    description: string
}

export type groupData = {
    name: string,
    description: string
}