import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { mongodb } from "~/utils/db.server";

export const action = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData()
    const prefab = {
        title: formData.get("title"),
        link: formData.get("link")
    }

    const db = mongodb.db("test").collection("assets")
    const result = await db.insertOne(prefab)
    //return json({result})
    return redirect(`/prefabs/${result.insertedId}`)
}

export default function Index() {
    return (
      <div>
        <h2>Add a prefab</h2>
        <Form method="POST" action="/movies/add">
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="link" placeholder="link" />
          <button type="submit">
            Search
          </button>
        </Form>
      </div>
    )
  }

