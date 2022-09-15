import Head from 'next/head'
import Default from '../layouts/default';
import profilePic from "../public/andrewcairns_400x400.jpeg";

export default function Home() {
    return <>
        <Head>
            <title>Andrew Cairns</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Default title='Howdy!'>
            <p>
                <span className='w-44 h-64 rounded-xl bg-cover bg-center m-3 mr-8 -ml-2 float-left -rotate-2' style={{
                    backgroundImage: `url(${profilePic.src})`,
                }} />
                My name is Andrew Cairns and I'm a Software Engineer living in Scotland. I've been building software
                since Turbo Pascal on Amstrad. That's an old programming language no one writes anymore for an old computer no one uses anymore.
            </p>
            <p className='prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded'>
                I'm a Lead Back-End Engineer at {' '}
                <a href="https://transfergo.com" target="_blank" className="bg-yellow-300 -rotate-1">TransferGo</a>.
                When I'm not working, you'll find me kayaking, coaching youth football or building {' '}
                <a href="https://trypatchwork.com" target="_blank" className="bg-indigo-600 text-white rotate-2">Patchwork</a> {' '}
                to help third-sector organisations with storytelling.
            </p>
            <p>
                <a href="https://twitter.com/andrewcairns?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false" data-size="large">
                    Follow @andrewcairns
                </a>
            </p>
        </Default>
    </>;
}
