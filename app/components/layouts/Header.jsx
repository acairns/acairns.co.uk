import { Link } from "@remix-run/react";

export default function Header() {
    return <div className='flex justify-center p-10'>
        <Link to='/'>
            <img src="/andrew-cairns.png" alt="Andrew Cairns" style={{ width: 33 }} />
        </Link>
    </div>;
}