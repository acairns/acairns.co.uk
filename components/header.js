import Link from 'next/link';

export default function Header() {
    return <div className='flex justify-center p-10'>
        <Link href='/'>
            <a>
                <img src="/andrew-cairns.png" alt="Andrew Cairns" style={{ width: 33 }} />
            </a>
        </Link>
    </div>;
}
