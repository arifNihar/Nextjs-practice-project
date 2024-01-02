import {
  History,
  Plus,
  Users,
  Bell,
  Settings,
  ChevronDown,
  LayoutGrid,
  AlignJustify
} from "lucide-react";
import Image from "next/image";
import SearchInput from "./SearchInput";

export default function Header({ setShowSidebar }) {

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
          <button className="flex items-center">
            <span>Garat</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button>
            <Image
              src="/user.jpg"
              alt="user image"
              width={96}
              height={96}
              className="w-8 h-8 border border-indigo-800 rounded-full"
            />
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
