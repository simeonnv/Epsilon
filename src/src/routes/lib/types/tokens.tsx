import { RecordId } from "surrealdb";

export type tokens= {
    id: RecordId,
    createdAt: Date,
    role: "user" | "admin",
    token: string;
}
