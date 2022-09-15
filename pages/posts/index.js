import { listPosts } from '@/utils/posts';
import Link from 'next/link';

export default function Posts({ posts }) {
    return posts.map((post, index) =>
        <div key={index}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            posts: listPosts(),
        },
    }
}
