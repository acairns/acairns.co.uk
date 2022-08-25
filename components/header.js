import Link from 'next/link';

export default function Header()
{
    return <div className='flex items-center justify-center'>
        <div className="sm:max-w-6xl p-10 w-full">
            <div className='flex'>
                <Link href='/'>
                    <a>
                        <img src="/andrew-cairns.png" alt="Andrew Cairns" style={{width: 33}} />
                    </a>
                </Link>
                <ul className='flex flex-row space-x-4 text-sm font-bold flex-grow justify-end'>
                    <li>
                        <a href="https://twitter.com/andrewcairns" className='text-blue-700'>Contact me</a>
                    </li>
                    <li>
                        <a href="https://trypatchwork.com" className='text-blue-700 border border-indigo-700 border-2 px-5 py-2 rounded-full hover:bg-indigo-700 hover:text-white'>Patchwork</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>;
}
