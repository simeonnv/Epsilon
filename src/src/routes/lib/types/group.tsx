import { RecordId } from "surrealdb"

export type group = {
    id: RecordId,
    name: string,
    createdAt: Date,
    icon: RecordId,
    description: string
}

export type groupData = {
    name: string,
    description: string
}

export type groupExtended = {
    id: RecordId,
    name: string,
    createdAt: Date,
    icon: {
        type: string,
        base64: string
    } | undefined,
    description: string
}