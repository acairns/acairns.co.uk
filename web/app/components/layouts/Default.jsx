import Header from "./Header";

export default function Default({ title, children }) {
    return <div className='flex flex-col'>
        <Header />
        <div className='mt-8 mb-16 m-auto max-w-full'>
            <div className="prose sm:prose-xl md:prose-2xl prose-headings:text-gray-700 p-10 max-w-2xl">
                <h1 className="text-4xl md:text-8xl font-bold">
                    {title}
                </h1>
                <div className='mt-8'>
                    {children}
                </div>
            </div>
        </div>
    </div>;
}