import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { LoaderFunctionArgs, LinksFunction } from "@remix-run/node";
import { mongodb } from "~/utils/db.server";
import type { Prefab } from "../utils/types.server"
import PrefabComponent from "../components/Prefab"
import stylesheet from "../styles/prefablist.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

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
        <div className="prefab-list-screen">
            <div className="prefab-list">
            {prefabs.map((prefab) => {
                return (
                    // Look into passing CSS styles later
                    <PrefabComponent key={prefab._id} {...prefab} />
                )
            })}
            </div>
        </div>
    )
}
/*
<div class="search-results-screen">
  <ul class="search-results">
    <li class="search-result-item">
      <a class="search-result-item-link" href="#">This is the first search result.</a>
      <h3 class="search-result-item-title">This is the title of the first search result.</h3>
      <p class="search-result-item-description">This is a brief description of the first search result.</p>
    </li>
    <li class="search-result-item">
      <a class="search-result-item-link" href="#">This is the second search result.</a>
      <h3 class="search-result-item-title">This is the title of the second search result.</h3>
      <p class="search-result-item-description">This is a brief description of the second search result.</p>
    </li>
  </ul>
</div>
*/
