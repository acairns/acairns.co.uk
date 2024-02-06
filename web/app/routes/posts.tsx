import {Outlet} from "@remix-run/react";

export default function Posts() {
    return (
        <>
            <Outlet />
            <div className="bg-white">
                <iframe className='w-full h-[800px]' src="https://acairns.substack.com/embed" frameBorder="0" scrolling="no" />
            </div>
        </>
    );
}
