import Default from '@/layouts/default';
import { listPosts } from '@/utils/posts';
import Link from 'next/link';

export default function Posts({ posts }) {
    return <Default title='Posts'>
        {
            posts.map((post, index) =>
                <h2 key={index}>
                    <Link href={`/posts/${post.slug}`}>
                        <a>{post.title}</a>
                    </Link>
                </h2>
            )
        }
    </Default>;
}

export async function getStaticProps() {
    return {
        props: {
            posts: listPosts(),
        },
    }
}
