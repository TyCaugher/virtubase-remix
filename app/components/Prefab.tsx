import { Link } from "@remix-run/react";

export default function Prefab (props: any) {
    return (
        <div className="assetResult" key={props._id}>
            <Link to={`/prefabs/${props._id}`}>
                {props.title} ({props.artist})
            </Link>
        </div>
    )
}