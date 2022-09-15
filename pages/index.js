import Head from 'next/head'
import Header from "../components/header";
import profilePic from "../public/andrewcairns_400x400.jpeg";

export default function Home() {
    return <>
        <Head>
            <title>Andrew Cairns</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

        <div className='flex flex-col'>
            <Header />
            <div className='mt-8 flex flex-grow items-center justify-center'>
                <div className="max-w-2xl p-10 sm:w-full">
                    <h2 className="text-6xl text-gray-700 font-bold">
                        <a href="https://acairns.co.uk/">Howdy!</a>
                    </h2>
                    <div className='prose prose-2xl mt-8'>
                        <p>
                            <span className='w-64 h-64 rounded-xl bg-cover bg-center m-3 mr-4 ml-0 float-left' style={{
                                backgroundImage: `url(${profilePic.src})`,
                            }} />
                            My name is Andrew Cairns and I'm a Software Engineer living in Scotland. I've been building software
                            since Turbo Pascal on Amstrad. That's an old programming language for an old computer.
                        </p>
                        <p>
                            I'm building a platform to help {' '}
                            <a href="https://trypatchwork.com" target="_blank" className="text-indigo-500">third sector organisations with storytelling</a>.
                            I'm also a Lead Back-End Engineer at {' '}
                            <a href="https://transfergo.com" target="_blank" className="text-indigo-500">TransferGo</a>.
                        </p>
                        <p>
                            When I'm not working you'll find me kayak camping, coaching youth football, spending time with my family or... still coding.
                        </p>
                        <p>
                            <a href="https://twitter.com/andrewcairns?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false" data-size="large">
                                Follow @andrewcairns
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
