import { listPosts, readPost } from '@/utils/posts';

function background(mesh) {
    return {
        backgroundImage: `url("${mesh}")`,
        backgroundSize: 'cover'
    }
}

export default function Post({ mesh, frontmatter }) {

    return <>
        <div className='overflow-hidden flex flex-col text-gray-700 pt-16 text-3xl px-16' style={{width: 1200, height: 675, ...background(mesh)}}>

            <div className='z-10 bg-slate-400 rounded-t-md opacity-80 mx-36 h-3 shadow' />
            <div className='z-20 bg-slate-300 rounded-t-lg opacity-90 mx-20 h-4 shadow-md' />

            <div className="z-30 bg-white rounded-t-2xl shadow-lg p-12 relative flex flex-col flex-grow">
                <div className="flex flex-grow items-center">
                    <h1 className="text-8xl leading-none pb-4 -mb-4 font-extrabold drop-shadow-md">
                        {frontmatter.title}
                    </h1>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center flex-grow">
                        <img className="rounded-full w-14 h-14" src="/andrewcairns_400x400.jpeg" />
                        <p className="ml-4">by Andrew Cairns</p>
                    </div>
                    <img className="w-6 m-auto opacity-50" src="/andrew-cairns.png" />
                </div>
            </div>
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
        props: readPost(slug)
    }
}