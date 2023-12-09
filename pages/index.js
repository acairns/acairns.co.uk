import Author from "components/author";
import Head from "next/head";
import Default from "layouts/default";
import { listPosts } from "utils/posts";
import Link from "next/link";

export default function Home({ latestPosts }) {
  return (
    <>
      <Head>
        <meta
          key="description"
          name="description"
          content="My name is Andrew Cairns and I'm a Software Engineer living in Scotland. This is where I share my thoughts regarding software development."
        />

        <meta key="og:title" property="og:title" content="Andrew Cairns" />
        <meta
          key="og:description"
          property="og:description"
          content="My name is Andrew Cairns and I'm a Software Engineer living in Scotland. This is where I share my thoughts regarding software development."
        />
      </Head>
      <Default title="Howdy!" narrow>
        <Author />
        <p>
          My name is Andrew Cairns and I'm a Software Engineer and Content
          Creator living in Scotland.
        </p>
        <p>
          I've built software since Turbo Pascal on Amstrad - an old language no
          one remembers for an old computer no one used.
        </p>
        <p className="prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded hover:prose-a:shadow-md">
          I'm curently a software and content consultant through my company{" "}
          <a
            href="https://trypatchwork.com"
            target="_blank"
            className="bg-indigo-600 text-white rotate-2"
          >
            Patchwork
          </a>
          .
        </p>

        <p className="prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded hover:prose-a:shadow-md">
          Previously, I've worked at places like{" "}
          <a
            href="https://transfergo.com"
            target="_blank"
            className="bg-yellow-300 text-slate-700 -rotate-1"
          >
            TransferGo
          </a>{" "}
          where I was building Compliance, Risk and Anti-money Laundering stuff.
          I spend my spare time kayaking and coaching youth football.
        </p>

        <p className="prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded hover:prose-a:shadow-md">
          Recently, I decided to take{" "}
          <a
            href="https://www.youtube.com/@andrew.cairns"
            target="_blank"
            className="bg-red-600 text-white rotate-2"
          >
            YouTube
          </a>{" "}
          more seriously! If you'd like to stay in the loop with my content -
          follow me there!
        </p>

        {/*
            <h2>Latest Articles</h2>
            <div className='space-y-4'>
                {
                    latestPosts.map(
                        (post, index) => <div key={index}>
                            <div className='flex align-text-bottom'>
                                <Link href={`/posts/${post.slug}`}>
                                    <a className='block'>{post.frontmatter.title}</a>
                                </Link>
                                <em className='ml-3 text-slate-400 whitespace-nowrap'>
                                    <time className='text-sm' dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                                </em>
                            </div>
                            <small>
                                {post.frontmatter.description}
                            </small>
                        </div>
                    )
                }
            </div>

    /**/}
      </Default>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      latestPosts: listPosts().slice(0, 3),
    },
  };
}
