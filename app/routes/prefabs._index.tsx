import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { LoaderFunctionArgs } from "@remix-run/node";
import { mongodb } from "~/utils/db.server";
import type { Prefab } from "../utils/types.server"
import PrefabComponent from "../components/Prefab"

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url)

    let db = await mongodb.db("test");
    let collection = await db.collection("assets");
    let prefabs = await collection.find({}).toArray()

    return json(prefabs)   
}


export default function Prefabs() {
    const prefabs = useLoaderData();

    return (
        <div>
            <h1 className="text-xl">Prefabs</h1>
            {prefabs.map((prefab) => {
                return (
                    <PrefabComponent key={prefab._id} {...prefab} />
                )
            })}
        </div>
    )
}

