import Header from "components/header";
import classNames from 'classnames';

export default function Default({ title, narrow = false, children }) {
    const mainClasses = classNames(
        "prose prose-2xl prose-headings:text-gray-700 p-10",
        {
            "max-w-2xl": narrow
        }
    );

    return <div className='flex flex-col'>
        <Header />
        <div className='mt-8 flex flex-grow items-center justify-center'>
            <div className={mainClasses}>
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
