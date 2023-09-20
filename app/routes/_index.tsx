import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Virtubase" },
    { name: "description", content: "VRC Database" },
  ];
};

export default function Index() {
  return (
    <div className="container-home">
      <h1 className="">Virtubase</h1>
      <p>VRC Avatar Database</p>
      <div>
        <form method="get" action="/search">
          <label>Search <input name="term" type="text" /></label>
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <Link to="prefabs/add">Add a model</Link>
      </div>
    </div>
  );
}
