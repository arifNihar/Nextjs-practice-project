"use client";

import { Shirt, Plus, Grid, MoreHorizontal, HelpCircle, ChevronDown, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function OptionCard({ item }) {
    const Icon = item.icon;
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-sm shadow-md hover:shadow-lg">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <div className="">
                    <Icon strokeWidth=".5px" className="w-32 h-32" />
                </div>
                <p className="line-clamp-1">
                    {item.description}
                </p>
                {item.enabled ? (
                    <Link href={item.link} className="inline-flex items-center px-3 py-2 space-x-2 text-white bg-indigo-500 rounded-sm">{item.link_title}</Link>
                ) : (
                    <button className="inline-flex items-center px-3 py-2 space-x-2 text-white bg-indigo-500 rounded-sm">Enable</button>
                )}
            </div>
        </div>
    )
}
