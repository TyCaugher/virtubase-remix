import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Prefab from "~/components/Prefab";
import { mongodb, ObjectId } from "~/utils/db.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const prefabId = params.prefabId
    console.log("[DEBUG] ID:", prefabId)

    let db = await mongodb.db("test")
    let collection = await db.collection("assets")
    let prefab = await collection.findOne({_id: new ObjectId(prefabId)})

    return json(prefab)
}

export default function Index() {
    const prefab = useLoaderData();
    console.log(prefab)
    return (
        <div>
            <h1>Title: {prefab.title}</h1>
            <p>{prefab._id}</p>
        </div>
    )
}
