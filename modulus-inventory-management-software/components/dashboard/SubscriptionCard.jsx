import React from 'react'
import Link from "next/link";

export default function SubscriptionCard() {
  return (
    <div className="px-1 py-3">
        
        <div className="p-3 bg-indigo-800 rounded-lg">
        <div className="pb-3 border-b border-slate-400">
      <p className="pl-2 text-sm border-l-2 border-orange-500">Your <span className="font-semibold">Premium</span> plan's trial expires in <span className="text-orange-500 ">13 days</span>.</p>
    </div>
    <div className="flex text-sm">
        <button className="p-1 mr-2 border-r border-slate-500">Change Plane</button>
        <Link href="#" className="p-1">Upgrade</Link>
    </div>
        </div>

    </div>
  )
}
