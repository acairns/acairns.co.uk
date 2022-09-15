import Header from "../components/header";

export default function Default({ title, children }) {
    return <div className='flex flex-col'>
        <Header />
        <div className='mt-8 flex flex-grow items-center justify-center'>
            <div className="prose prose-2xl prose-headings:text-gray-700 max-w-2xl p-10 sm:w-full">
                <h1 className="text-6xl font-bold">
                    {title}
                </h1>
                <div className='mt-8'>
                    {children}
                </div>
            </div>
        </div>
    </div>;
}
