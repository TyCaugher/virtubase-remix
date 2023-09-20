import type { WithId, Document } from "mongodb"

export interface Prefab extends WithId<Document> {
    // Define our model properties here.
    title: string,
    link: string,
    updatedAt: string,
    createdAt: string,
}