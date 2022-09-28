export default function Newsletter() {
    return (
        <div className="mx-auto max-w-4xl lg:max-w-5xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
            <div className="lg:w-0 lg:flex-1">
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
                    Sign up for my newsletter
                </p>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
                    A place where I share my thoughts and ideas on software development.
                </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
                <form id="revue-form" name="revue-form" target="_blank" method="post" action="https://newsletter.acairns.co.uk/add_subscriber" className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="member[email]"
                        type="email"
                        autoComplete="email"
                        required
                        className="lg:min-w-[300px] w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
                        placeholder="Enter your email"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <input
                            type="submit"
                            name="member[subscribe]"
                            value="Subscribe"
                            className="cursor-pointer flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        />
                    </div>
                </form>
                <p className="mt-3 text-sm text-gray-300">
                    I care about the protection of your data.
                </p>
                <p className="text-sm text-gray-300">
                    Read Revue's {' '}
                    <a target="_blank" href="https://www.getrevue.co/terms" className="font-medium text-white underline">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="font-medium text-white underline">Privacy Policy</a>
                </p>
            </div>
        </div>
    )
}