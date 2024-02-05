import { Link } from "@remix-run/react";
import Player from "../../components/Player.jsx";

export default function Header() {
    return <div className='flex justify-center pt-8 -mb-8'>
        <Link to='/' style={{width: 120, height: 120}}>
            <Player project='me' auto />
        </Link>
    </div>;
}