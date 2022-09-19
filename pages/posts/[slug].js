import Head from 'next/head';
import md from 'markdown-it';
import Default from '@/layouts/default';
import hljs from 'highlight.js';
import { listPosts, readPost } from '@/utils/posts';
// import 'highlight.js/styles/a11y-dark.css';
// import 'highlight.js/styles/agate.css';
// import 'highlight.js/styles/androidstudio.css';
// import 'highlight.js/styles/ascetic.css';
// import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/codepen-embed.css';
// import 'highlight.js/styles/dark.css';
// import 'highlight.js/styles/devibeans.css';
// import 'highlight.js/styles/felipec.css'; // ++
// import 'highlight.js/styles/github-dark-dimmed.css'; // ++
// import 'highlight.js/styles/gml.css';
// import 'highlight.js/styles/hybrid.css';
// import 'highlight.js/styles/ir-black.css';
// import 'highlight.js/styles/lioshi.css';
// import 'highlight.js/styles/monokai-sublime.css';
import 'highlight.js/styles/nord.css'; // ++
// import 'highlight.js/styles/panda-syntax-dark.css';
// import 'highlight.js/styles/shades-of-purple.css';
// import 'highlight.js/styles/tokyo-night-dark.css';
// import 'highlight.js/styles/vs2015.css'; // ++
// import 'highlight.js/styles/xt256.css';

const markdownOptions = {
    html: true,
    xhtmlOut: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) { }
        }

        return ''; // use external default escaping
    }
};

export default function Post({ content, ...frontmatter }) {
    return <>
        <Head>
            <title>{frontmatter.title} - Andrew Cairns</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Default title={frontmatter.title}>
            <div dangerouslySetInnerHTML={{ __html: md(markdownOptions).render(content) }} />
        </Default>
    </>;
};

export async function getStaticPaths() {
    return {
        paths: listPosts().map(post => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false,
    }

}

export async function getStaticProps({ params: { slug } }) {
    return {
        props: readPost(slug),
    }
}