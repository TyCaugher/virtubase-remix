import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect, LinksFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { mongodb } from "~/utils/db.server";

import addStyles from "../styles/add.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: addStyles },
];

export const action = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData()
    const prefab = {
        title: formData.get("title"),
        link: formData.get("link"),
        artist: formData.get("artist"),
        price: formData.get("price")
    }

    console.log(prefab)

    const formErrors = {
      link: validateLink(prefab)
    }

    if (Object.values(formErrors).some(Boolean)) return { formErrors };

    const db = await mongodb.db("test").collection("assets")
    const result = await db.insertOne(prefab)
    console.log("Adding", json(result))
    return redirect(`/prefabs/${result.insertedId}`)
}

const validateLink = (prefab) => {
  if (prefab.link.includes("gumroad") || prefab.link.includes("booth.pm")) {
    console.log("Link is good")
    return false
  }
  else {
    return true
    console.log("Link is bad")
  }
}

export default function Index() {
  const actionData = useActionData();
    return (
      <div className="add-prefab">
        <Form className="add-prefab-form" method="POST" action="/prefabs/add">

          <input type="text" name="title" placeholder="title (required)" required />
          <input type="text" name="link (must be gumroad or booth)" placeholder="link (required)" required />
          <input type="text" name="artist" placeholder="artist (required)" required/>
          {actionData?.formErrors?.name ? (
            <p style={{ color: "red" }}>{actionData?.formErrors?.name}</p>
          ) : null}
          <input type="number" name="price" placeholder="price (required)" required/>
          <button className="prefab-submit-button" type="submit">
            Add
          </button>
        </Form>
      </div>
    )
  }

