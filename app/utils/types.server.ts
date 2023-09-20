import type { WithId, Document } from "mongodb"

export interface Prefab extends WithId<Document> {
    // Define our model properties here.
    title: string,
    link: string,
    price: Int16Array,
    isMature: boolean // is the prefab 18+
    features: {
        type: string
        species: string,
        bodyOptions: string[],
    }
    specs: {
        platform: string,
        fbtReady: boolean,
        hasBlenderFile: boolean,
        hasSubstanceFile: boolean,
    }
    updatedAt: string,
    createdAt: string,
}

/*
A prefab post will consist of:
Prefab {
    title: str
    artist: str
    link: str (this will only allow gumroad links)
    type: str (avatar, accessory)
    species: str
    platform: [pc, quest]
    gender: [male, female, any]
    hasSubstanceFile: bool
    hasBlenderFile: bool
    tags: [] : str
    isMature: bool
    price: int
}
*/