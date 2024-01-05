"use client";

import {
  History,
  Plus,
  Users,
  Bell,
  Settings,
  ChevronDown,
  LayoutGrid,
  AlignJustify,
} from "lucide-react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { generateInitials } from "@/lib/generateInitials";
import Login from "@/app/login/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ setShowSidebar }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p> Loading user......</p>;
  }
  if (status === "unauthenticated") {
    return router.push("/login");
  }
  const username = session?.user?.name.split(" ")[0] ?? "";
  const initails = generateInitials(session?.user?.name);
  return (
    <div className="flex items-center justify-between h-12 px-8 bg-indigo-100 border-b border-indigo-100">
      <button className="lg:hidden" onClick={() => setShowSidebar(true)}>
        <AlignJustify className="w-6 h-6" />
      </button>
      <div className="flex gap-3">
        <button className="hidden lg:block">
          <History className="w-6 h-6" />
        </button>
        <SearchInput />
      </div>
      <div className="items-center hidden gap-3 lg:flex">
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 bg-indigo-600 rounded-lg">
            <Plus className="w-4 h-4 text-slate-50" />
          </button>
        </div>
        <div className="flex space-x-2 border-r border-gray-300">
          <button className="p-1 rounded-lg hover:bg-indigo-600">
            <Users className="w-4 h-4 text-slate-900" />
          </button>
          <button className="p-1 rounded-lg hover:bg-indigo-600">
            <Bell className="w-4 h-4 text-slate-900" />
          </button>
          <button className="p-1 rounded-lg hover:bg-indigo-600">
            <Settings className="w-4 h-4 text-slate-900" />
          </button>
        </div>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="flex items-center">
                <span>{username}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <button onClick={() => signOut()}>Logout</button>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>

          <button>
            {session.user?.image ? (
              <Image
                src={session.user?.image}
                alt="user image"
                width={96}
                height={96}
                className="w-8 h-8 border border-indigo-800 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-white border border-indigo-800 rounded-full">
                {initails}
              </div>
            )}
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-slate-600" />
          </button>
        </div>
      </div>
      <button className="lg:hidden">
        <Image
          src="/user.jpg"
          alt="user image"
          width={96}
          height={96}
          className="w-8 h-8 border border-indigo-800 rounded-full"
        />
      </button>
    </div>
  );
}
