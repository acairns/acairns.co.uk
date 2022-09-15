import Header from "../components/header";

export default function Default({ title, children }) {
    return <div className='flex flex-col'>
        <Header />
        <div className='mt-8 flex flex-grow items-center justify-center'>
            <div className="max-w-2xl p-10 sm:w-full">
                <h2 className="text-6xl text-gray-700 font-bold">
                    {title}
                </h2>
                {children}
            </div>
        </div>
    </div>;
}