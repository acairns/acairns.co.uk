import { NavLink } from "@remix-run/react";
import slugify from "slugify";

export default function SubHeading({title}) {
    const slug = slugify(
        title,
        {
            lower: true
        }
    );

    return (
        <h2 id={`${slug}`}>
            <NavLink to={`#${slug}`} className="md:-ml-[46px] md:mr-4 mr-2 text-orange-500 no-underline">#</NavLink>
            {title}
        </h2>
    );
}
