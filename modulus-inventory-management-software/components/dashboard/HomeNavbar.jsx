"use client";

import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavbar() {
    const pathname = usePathname();
    console.log(pathname);
    const navLinks = [
        {
            title: "Dashboard",
            href: "/dashboard/home/overview",
        },
        {
            title: "Getting Started",
            href: "/dashboard/home/getting-started",
        },
        {
            title: "Recent Updates",
            href: "/dashboard/home/updates",
        },
        {
            title: "Announcements",
            href: "/dashboard/home/announcements",
        },
    ];
    return (
        <div className="h-32 p-5 border-b border-indigo-200 header-bg bg-slate-50">
            <div className="flex space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg">
                    <Building2 />
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold uppercase text-slate-700">
                        Hello, Modulus Developer
                    </p>
                    <span className="text-sm text-gray-500">Garat</span>
                </div>
            </div>

            <nav className="sticky flex mt-6 space-x-4">
                {navLinks.map((item, idx) => {
                    return (
                        <Link
                            key={idx}
                            href={item.href}
                            className={`${pathname === item.href ? "py-[5px] border-b-2 border-indigo-400" : "py-1"}`}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
