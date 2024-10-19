import { RecordId } from "surrealdb";

export type textChannels = {
    id: RecordId,
    group: RecordId,
    createdAt: Date,
    role: "user" | string,
    name: string;
}