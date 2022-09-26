// <span class="inline-flex items-center rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800">Badge</span>

export default function Badge({ children }) {
    return <span className="inline-flex items-center rounded md:rounded-md bg-blue-100 px-2 py-0.5 text-xs md:text-sm font-medium text-blue-800">
        {children}
    </span>
}
