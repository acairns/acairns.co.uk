import md from 'markdown-it';
import { listPosts, readPost } from '@/utils/posts';
import Default from '../../layouts/default';

export default function Post({ content, ...frontmatter }) {
    return <Default title={frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </Default>;
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