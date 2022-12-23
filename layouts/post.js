import Footer from "components/footer";
import Author from 'components/author';
import Header from "components/header";
import Badge from "components/badge";

export default function Post({ title, date, tags, children }) {
    return <div className='flex flex-col'>
        <Header />
        <div className='mt-8 mb-16 m-auto max-w-full'>
            <div className="prose sm:prose-xl md:prose-2xl prose-headings:text-gray-700 p-10">
                <h1 className="text-4xl md:text-8xl font-bold">
                    {title}
                </h1>

                {
                    tags && <div className='space-x-4 mb-4'>
                        {
                            tags.map(tag => <Badge key={tag}>{tag}</Badge>)
                        }
                    </div>
                }

                <small className='text-slate-400'>
                    <time dateTime={date}>{date}</time>
                </small>

                <div className='mt-8'>
                    {children}
                </div>
                <div className='flex items-center justify-center my-12'>
                    <Author />
                </div>
            </div>
        </div>
        { /* <Footer /> */ }
    </div>;
}