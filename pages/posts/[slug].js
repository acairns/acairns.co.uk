import Head from 'next/head';
import md from 'markdown-it';
import Default from '@/layouts/default';
import Author from 'components/author';
import { listPosts, readPost } from '@/utils/posts';
import hljs from 'highlight.js';
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

export default function Post({ content, mtime, ...frontmatter }) {
    return <>
        <Head>
            <title>{frontmatter.title} - Andrew Cairns</title>
            <meta key="og:title" property="og:title" content={`${frontmatter.title} - Andrew Cairns`} />
            <meta key="description" name="description" content={frontmatter.description} />
            <meta key="og:description" property="og:description" content={frontmatter.description} />
        </Head>

        <Default title={frontmatter.title}>
            <article dangerouslySetInnerHTML={{ __html: md(markdownOptions).render(content) }} />
        </Default>

        <div className='flex items-center justify-center mb-12'>
            <Author />
        </div>
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