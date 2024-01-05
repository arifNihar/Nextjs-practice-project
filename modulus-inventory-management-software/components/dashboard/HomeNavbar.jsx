"use client";

import { Building2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavbar() {
  const { data: session } = useSession();
  const username = session?.user?.name || "";
  const pathname = usePathname();
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
    <div className="h-32 p-5 header-bg bg-slate-50">
      <div className="flex space-x-3">
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold uppercase text-slate-700">
            Hello, Modulus Developer
          </p>
          <span className="text-sm text-gray-500">{username}</span>
        </div>
      </div>

      <nav className="sticky flex mt-6 space-x-4">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {navLinks.map((item, idx) => {
              return (
                <li className="me-2" key={idx}>
                  <Link
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? "inline-block px-4 py-2 text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
                        : "inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
