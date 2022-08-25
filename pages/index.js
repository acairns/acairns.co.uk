import Head from 'next/head'
import Link from 'next/link';
import Header from "../components/header";

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
                    <div className='prose prose-xl mt-8'>
                        <p>
                            My name is Andrew Cairns and I'm a Software Engineer living in Scotland. I've been building software
                            since Turbo Pascal on Amstrad. That's an old programming language for an old computer.
                        </p>
                        <p>
                            I'm building a platform to help {' '}
                            <a href="https://trypatchwork.com" target="_blank" className="text-indigo-500">third sector organisations with storytelling</a>.
                            I'm also a Lead Back-End Engineer at {' '}
                            <a href="https://transfergo.com" target="_blank" className="text-indigo-500">TransferGo</a>{' '}
                            and have also committed to writing more as a way to{' '}
                            <Link href="/writing/learning-in-public" className="text-indigo-500"><a>learn in public</a></Link>.
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
