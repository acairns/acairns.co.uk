import Head from 'next/head'
import Header from "../../components/header";
import Breadcrumbs from "../../components/breadcrumbs";

const pages = [
    {name: 'Writing', href: '#', current: false},
    {name: 'Learning in public', href: '#', current: true},
];

export default function LearningInPublic() {
    return <>
        <Head>
            <title>Andrew Cairns</title>
            <link rel="icon" href="/favicon.png"/>
        </Head>

        <div className='flex flex-col'>
            <Header/>
            <div className='mt-8 flex flex-grow items-center justify-center'>
                <div className="max-w-2xl p-10 sm:w-full">
                    <Breadcrumbs pages={pages}/>
                    <h2 className="mt-8 text-6xl text-gray-700 font-bold">
                        Learning in public
                    </h2>
                    <div className='prose prose-xl mt-8'>
                        <p>
                            I wanted to explain why I've decided to share what I'm learning.
                        </p>
                        <p>
                            Learning is something I find enjoyable. It doesn't matter about the topic. From astronomy to
                            the role of insulin - I'm curious about almost everything.
                        </p>
                        <p>
                            However, I've found this mostly-positive habit to not be without tradeoffs.
                        </p>
                    </div>
                    <h3 className="mt-8 text-4xl text-gray-700 font-bold">Overconsumption</h3>
                    <div className='prose prose-xl mt-8'>
                        <p>
                            Over time I've come to believe there's an optimal limit to information consumption.
                            Beyond this limit, we are no longer consuming content - our attention is being consumed.
                        </p>
                        <blockquote>
                            <p>
                                Modern technology isn’t changing us. It’s changing society. The attention economy has
                                commoditized our time and turned us into products to be bought and sold.
                            </p>
                        </blockquote>
                        <p>Consuming content can easily become entertainment. Edutainment in my case.</p>
                        <p>How much is enough?</p>
                    </div>
                    <h3 className="mt-8 text-4xl text-gray-700 font-bold">Mental models</h3>
                    <div className='prose prose-xl mt-8'>
                        <p>
                            Something about ideas forming and inspiration.
                        </p>
                    </div>

                    <h3 className="mt-8 text-4xl text-gray-700 font-bold">Taking action</h3>
                    <div className='prose prose-xl mt-8'>
                        <p>
                            No identity change - I need to take action on what I learn. Increase accountability.
                        </p>
                    </div>

                    <h3 className="mt-8 text-4xl text-gray-700 font-bold">Fear</h3>
                    <div className='prose prose-xl mt-8'>
                        <p>
                            I haven't been sharing my work enough because I've been scared of being judged by other
                            people. I still have this fear, but I believe learning in public and sharing my thoughts
                            and more of my work will help.
                        </p>
                        <p>
                            I could be totally wrong.
                            Got a different point of view or perspective?
                            Let me know! (be nice, please)
                        </p>
                    </div>

                    <h3 className="mt-8 text-4xl text-gray-700 font-bold">Teaching</h3>
                    <div className='prose prose-xl mt-8'>
                        <p>hei</p>
                    </div>

                    <div className='prose prose-xl mt-16'>
                        <p>
                            I have started to write as a way to introduce a system preventing over-consumption, confront
                            my fear of being judged, improve the mental models I create and put into practice the things
                            I learn.
                        </p>
                        <p>
                            I'm beginning with LinkedIn posts and day-dreaming about a small podcast. I don't know how
                            it will go - and I don't care. I'm not attached to the results, I'm more interested in the
                            system.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
};