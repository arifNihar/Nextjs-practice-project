import React from 'react'

export default function InventorySummaryCard({ item }) {
    return (
        <div
            className="flex items-center justify-between gap-3 px-4 py-2 transition-all duration-300 bg-white border rounded-lg shadow cursor-pointer border-slate-200 hover:border-indigo-300"
        >
            <h2 className="text-sm uppercase text-slate-500">
                {item.title}
            </h2>
            <h4 className="text-2xl">{item.number}</h4>
        </div>
    )
}
