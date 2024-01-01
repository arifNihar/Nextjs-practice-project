import React from 'react'

export default function DataTable({ data, columnNames }) {
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
                    {data.map((item, idx) => {
                        return (
                            <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                {columnNames.map((colName, i) => {
                                    return (
                                        <td key={i} className="px-6 py-4">{item[colName]}</td>
                                    )
                                })}
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>

    )
}
