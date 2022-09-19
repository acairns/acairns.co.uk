import Author from 'components/author';
import Head from 'next/head'
import Default from 'layouts/default';

export default function Home() {
    return <>
        <Head>
            <title>Andrew Cairns</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Default title='Howdy!' narrow>
            <Author />
            <p>

                My name is Andrew Cairns and I'm a Software Engineer living in Scotland. I've been building software
                since Turbo Pascal on Amstrad. That's an old programming language no one writes anymore for an old computer no one uses anymore.
            </p>
            <p className='prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded hover:prose-a:shadow-md'>
                I work at {' '}
                <a href="https://transfergo.com" target="_blank" className="bg-yellow-300 text-slate-700 -rotate-1">TransferGo</a> {' '}
                building Compliance, Risk and Anti-money Laundering stuff.
                I spend my spare time kayaking, coaching youth football or building {' '}
                <a href="https://trypatchwork.com" target="_blank" className="bg-indigo-600 text-white rotate-2">Patchwork</a> {' '}
                to help third-sector organisations with storytelling.
            </p>
            <p>
                I'm also trying to write more about software.
            </p>
        </Default>
    </>;
}
