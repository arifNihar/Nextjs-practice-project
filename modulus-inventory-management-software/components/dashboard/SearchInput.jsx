import { Search } from "lucide-react";

export default function SearchInput() {
    return (
        <form className="hidden md:block">
            <label className="sr-only">
                Search
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                    <Search className="w-4 h-4 text-indigo-400 dark:text-indigo-300" />
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-2 py-1.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search in Customers (*)"
                    required
                />
            </div>
        </form>
    );
}
