import Link from "next/link";
import { X } from "lucide-react";

export default function FormHeader({ title, href }) {
    return (
        <div className="flex items-center justify-between px-16 py-3 bg-white">
            <h2 className="text-xl font-semibold text-slate-700">{title}</h2>
            <Link href={href}>
                <X />
            </Link>
        </div>
    )
}
