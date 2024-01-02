import { PencilRuler, Trash2 } from "lucide-react";
import Link from 'next/link';

export default function DataTable({ data = [], columnNames = [], menuName }) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columnNames.map((colName, i) => (
                            <th key={i} scope="col" className="px-6 py-3">
                                {colName}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, idx) => {
                        return (
                            <tr
                                key={idx}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                {columnNames?.map((colName, i) => {
                                    return (
                                        <td key={i} className="px-6 py-4">
                                            {item[colName]}
                                        </td>
                                    );
                                })}
                                <td className="flex items-center px-6 py-4 space-x-4 text-right">
                                    <Link
                                        href={`/dashboard/inventory/${menuName}/update/${item.id}`}
                                        className="flex items-center space-x-1 font-medium text-indigo-600 dark:text-indigo-500"
                                    >
                                        <PencilRuler className="w-4 h-4" />
                                        <span>Edit</span>
                                    </Link>
                                    <button className="flex items-center space-x-1 font-medium text-red-600 dark:text-red-500">
                                        <Trash2 className="w-4 h-4" />
                                        <span>Delete</span>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
