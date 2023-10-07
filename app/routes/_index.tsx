import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import stylesheet from "../styles/homepage.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


export const meta: MetaFunction = () => {
  return [
    { title: "Virtubase" },
    { name: "description", content: "VRC Database" },
  ];
};

export default function Index() {
  return (
    <div className="homepage">
      <h1 className="homepage-title">Virtubase</h1>
      <p>VRC Avatar Database</p>
      <form className="homepage-search" method="get" action="/search">
        <input name="term" type="text" placeholder="search"/>
        <button type="submit">Search</button>
      </form>
      <div className="homepage-menu">
        <button type="button">
          Add A Prefab
          <Link to="prefabs/add"/>
        </button>
        <button type="button">
          View All
          <Link to="prefabs"/>
        </button>
      </div>
    </div>
  );
}

/*
<div class="homepage">
  <h1 class="homepage-title">My Website</h1>
  <form class="homepage-search">
    <input type="text" placeholder="Search">
    <button type="submit">Search</button>
  </form>
</div>
*/
