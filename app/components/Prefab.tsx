import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import stylesheet from "../styles/prefablist.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


export default function Prefab (props: any) {
    return (
        <div className="prefab-list-item" key={props._id}>
            <Link to={`/prefabs/${props._id}`}>
                <p className="prefab-list-item-title">{props.title} (Artist)</p>
                <p className="prefab-list-item-price">$0.00</p>
            </Link>
        </div>
    )
}