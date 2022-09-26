import Author from 'components/author';
import Head from 'next/head'
import Default from 'layouts/default';
import { listPosts } from 'utils/posts';
import Link from 'next/link';

export default function Home({ latestPosts }) {
    return <>
        <Head>
            <meta key="og:title" property="og:title" content="Andrew Cairns" />
            <meta key="description" name="description" content="My name is Andrew Cairns and I'm a Software Engineer living in Scotland. This is where I share my thoughts regarding software development." />
            <meta key="og:description" property="og:description" content="My name is Andrew Cairns and I'm a Software Engineer living in Scotland. This is where I share my thoughts regarding software development." />
        </Head>
        <Default title='Howdy!' narrow>
            <Author />
            <p>
                My name is Andrew Cairns and I'm a Software Engineer living in Scotland. I've been building software since Turbo Pascal on Amstrad. That's an old programming language no one writes anymore for an old computer no one uses anymore.
            </p>
            <p className='prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded hover:prose-a:shadow-md'>
                I work at {' '}
                <a href="https://transfergo.com" target="_blank" className="bg-yellow-300 text-slate-700 -rotate-1">TransferGo</a> {' '}
                building Compliance, Risk and Anti-money Laundering stuff.
                I spend my spare time kayaking, coaching youth football or building {' '}
                <a href="https://trypatchwork.com" target="_blank" className="bg-indigo-600 text-white rotate-2">Patchwork</a> {' '}
                to help third-sector organisations with storytelling.
            </p>

            <h2>Latest Articles</h2>
            {
                latestPosts.map(
                    (post, index) => <div key={index}>
                        <p>
                            <Link href={`/posts/${post.slug}`}>
                                <a className='block'>{post.title}</a>
                            </Link>
                            <small>{post.description}</small>
                        </p>
                    </div>
                )
            }

        </Default>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            latestPosts: listPosts().slice(0, 3)
        }
    };
}