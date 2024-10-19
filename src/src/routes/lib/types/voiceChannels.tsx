import { RecordId } from "surrealdb";

export type voiceChannels = {
    id: RecordId,
    group: RecordId,
    createdAt: Date,
    role: "user" | string,
    name: string;
}