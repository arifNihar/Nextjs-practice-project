import { History, Plus } from "lucide-react";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="flex items-center justify-between h-12 px-8 bg-indigo-100">
      <div className="flex gap-3">
        {/* TODO: Recent activities */}
        <button>
          <History className="w-6 h-6" />
        </button>
        {/* TODO: Search */}
        <SearchInput />
      </div>
        {/* TODO: pluse icon */}
      <div className="flex">
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 bg-indigo-600 rounded-lg">
            <Plus className="w-4 h-4 text-slate-50" />
          </button>
        </div>

      </div>
    </div>
  );
}
