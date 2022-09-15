import md from 'markdown-it';
import { listPosts, readPost } from '@/utils/posts';

export default function Post({ content, frontmatter }) {
    return <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: md().render(content) }} />;
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