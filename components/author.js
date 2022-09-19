import Link from 'next/link'
import GitHub from 'components/icons/github';
import LinkedIn from 'components/icons/linkedin';
import Twitter from 'components/icons/twitter';
import profilePic from "public/andrewcairns_400x400.jpeg";

export default function Author() {
    return <div className="shadow-md m-3 mr-8 -ml-1 float-left -rotate-2 rounded-xl overflow-hidden">
        <div className='w-48 h-64 bg-cover bg-center' style={{
            backgroundImage: `url(${profilePic.src})`,
        }} />
        <div className="flex items-center justify-center space-x-3 -mt-1 bg-gray-700 p-3 text-white shadow-inner">
            <Link href="https://twitter.com/andrewcairns">
                <a>
                    <Twitter className='w-5 h-5 fill-white' />
                </a>
            </Link>
            <Link href="https://github.com/andrewcairns">
                <a>
                    <GitHub className='w-5 h-5 fill-white' />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/andrewcairns/">
                <a>
                    <LinkedIn className='w-5 h-5 fill-white' />
                </a>
            </Link>
        </div>
    </div>;
}