import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect, LinksFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { mongodb } from "~/utils/db.server";

import addStyles from "../styles/add.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: addStyles },
];

export const action = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData()
    const prefab = {
        title: formData.get("title"),
        link: formData.get("link")
    }

    const db = await mongodb.db("test").collection("assets")
    const result = await db.insertOne(prefab)
    console.log("Adding", json(result))
    return redirect(`/prefabs/${result.insertedId}`)
}

export default function Index() {
    return (
      <div className="container-add">
        <h2>Add a prefab</h2>
        <div className="add-form">
          <Form method="POST" action="/prefabs/add">
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="link" placeholder="link" />
            <input type="text" name="artist" placeholder="artist"/>
            <input type="number" name="price" placeholder="price"/>
            <button className="prefab-submit-button" type="submit">
              Add
            </button>
          </Form>
        </div>
      </div>
    )
  }

