"use client";

import { useState } from "react";
import { BadgePlus, BadgeMinus } from "lucide-react";
import DataTable from "@/components/dashboard/DataTable";

export default function WarehouseDataTable({
    warehouse_data,
    warehouse_columnNames,
    warehouse_type_data,
    warehouse_type_columnNames,
}) {
    const tabs = [
        {
            title: "Warehouses",
            icon: BadgePlus,
            form: "main",
        },
        {
            title: "Warehouse Type",
            icon: BadgeMinus,
            form: "type",
        },
    ];
    const [activeForm, setActiveForm] = useState("main");

    return (
        <div className="w-full max-w-6xl px-4 py-2 mx-auto my-4">
            <div className="w-full max-w-6xl px-4 py-2 mx-auto my-4 bg-white border border-b border-indigo-200 rounded-lg shadow dark:border-indigo-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-indigo-500 dark:text-indigo-400">
                    {tabs.map((tab, idx) => {
                        const Icon = tab.icon;
                        return (
                            <li className="me-2" key={idx}>
                                <button
                                    onClick={() => setActiveForm(tab.form)}
                                    className={`${activeForm === tab.form
                                        ? "inline-flex items-center justify-center p-4 text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500 group"
                                        : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-indigo-600 hover:border-indigo-600"
                                        }`}
                                >
                                    <Icon
                                        className={`${activeForm === tab.form
                                            ? "w-5 h-5 text-indigo-600 me-2 group-hover:text-indigo-600"
                                            : "w-5 h-5 text-indigo-300 me-2 group-hover:text-indigo-600"
                                            }`}
                                    />
                                    {tab.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {activeForm === "main" ? (
                <DataTable data={warehouse_data} columnNames={warehouse_columnNames} menuName="warehouse" />
            ) : (
                <DataTable
                    data={warehouse_type_data}
                    columnNames={warehouse_type_columnNames}
                    menuName="warehouse/type"
                />
            )}
        </div>
    );
}
