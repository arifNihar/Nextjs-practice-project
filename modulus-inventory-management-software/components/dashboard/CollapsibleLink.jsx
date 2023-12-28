import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function InventoryCollapsableLink({ item }) {
    return (
        <Link href={item.href} className="flex items-center justify-between py-2 pl-8 pr-4 space-x-3 transition-all duration-300 rounded-lg hover:bg-indigo-800">
            <span>{item.title}</span>
            <PlusCircle className="w-4 h-4" />
        </Link>
    )
}
