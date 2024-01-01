import { List, Plus, Grid, MoreHorizontal, HelpCircle, ChevronDown, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function FixedHeader({ title, newLink }) {
    return (
        <div className="flex items-center justify-between px-4 py-5 bg-white-300">
            <button className="text-2xl">All {title}</button>
            <div className="flex gap-4">
                <Link href={newLink} className="flex items-center p-1 px-4 space-x-2 text-white bg-indigo-600 rounded-sm">
                    <Plus className="w-4 h-4" />
                    <span>New</span>
                </Link>

                <div className="flex overflow-hidden rounded-md">
                    <button className="p-2 bg-gray-300 border-r border-gray-400">
                        <List className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-200">
                        <Grid className="w-4 h-4" />
                    </button>
                </div>

                <button className="p-2 text-gray-700 border border-gray-400 rounded-sm bg-slate-200">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
                <button className="p-2 text-white bg-orange-300 rounded-sm">
                    <HelpCircle className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}
