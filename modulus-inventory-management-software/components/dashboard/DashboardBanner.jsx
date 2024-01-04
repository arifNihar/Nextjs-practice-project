"use client";

import { useState } from "react";
import { CreditCard, X } from "lucide-react";

export default function DashboardBanner() {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`${
        hidden
          ? "hidden"
          : "hidden relative lg:grid items-center justify-between grid-cols-12 gap-3 px-16 py-6 bg-white"
      }`}
    >
      <div className="col-span-2">
        <CreditCard className="w-16 h-16 text-slate-400" />
      </div>

      <div className="col-span-6">
        <h2 className="text-2xl font-bold">Start accepting online payments</h2>
        <p>
          Businesses are moving towards online payments as they're easy, secure
          and fast. Try them for your business today.
        </p>
      </div>
      <div className="flex items-center justify-center col-span-3">
        <button className="text-white bg-indigo-600 rounded-lg py-2.5 px-8 uppercase">
          Enable
        </button>
      </div>

      <button
        onClick={() => setHidden(true)}
        className="absolute top-4 right-16"
      >
        <X className="" />
      </button>
    </div>
  );
}
