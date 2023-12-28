import Link from "next/link";

export default function SalesActivityCard({ item }) {
    return (
        <Link
            href={item.href}
            className="flex flex-col items-center gap-3 px-3 py-4 transition-all duration-300 bg-white border rounded-lg shadow cursor-pointer border-slate-200 hover:border-indigo-300"
        >
            <h4 className={`text-3xl font-semibold ${item.color}`}>
                {item.number}
            </h4>
            <small className="text-slate-500">{item.unit}</small>
            <div className="flex items-center space-x-2 text-slate-500">
                {item.icon}
                <span className="text-sm uppercase">{item.title}</span>
            </div>
        </Link>
    )
}
