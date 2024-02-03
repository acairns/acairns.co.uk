import { Link } from "@remix-run/react";

export default function Header() {
    return <div className='flex justify-center p-10'>
        <Link to='/'>
            <img src="/favicon.png" alt="Andrew Cairns" style={{ width: 120 }} />
        </Link>
    </div>;
}