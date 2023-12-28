"use client";

import { ShoppingCart, ChevronLeft, ChevronRight, Home, BaggageClaim, ShoppingBag, ShoppingBasket, Cable, BarChart, Files } from "lucide-react";
import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";
import SidebarDropdown from "./SidebarDropdown";

export default function Sidebar() {
    const inventoryLinks = [
        {
            title: "Items",
            href: "/dashboard/inventory",
        },
        {
            title: "Item Groups",
            href: "/dashboard/inventory",
        },
        {
            title: "Inventory Adjusments",
            href: "#",
        },
    ];

    const salesLinks = [
        {
            title: "Customers",
            href: "#",
        },
        {
            title: "Retainer Invoices",
            href: "#",
        },
        {
            title: "Sales Orders",
            href: "#",
        },
        {
            title: "Packages",
            href: "#",
        },
        {
            title: "Shipments",
            href: "#",
        },
        {
            title: "Invoices",
            href: "#",
        },
        {
            title: "Payments Received",
            href: "#",
        },
        {
            title: "Sales Returns",
            href: "#",
        },
        {
            title: "Credit Notes",
            href: "#",
        },
    ];

    return (
        <div className="fixed min-h-screen text-indigo-100 w-60 bg-indigo-950">
            {/* top */}
            <div className="flex flex-col">
                {/* Logo */}
                <div className="flex items-center px-2 py-2.5 space-x-2 bg-slate-900">
                    <ShoppingCart />
                    <span className="text-xl font-semibold">Inventory</span>
                </div>
                {/* Links */}
                <nav className="flex flex-col gap-3 px-3 py-6">
                    <Link className="flex items-center p-2 space-x-2 bg-indigo-400 rounded-md text-slate-50" href="#">
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>

                    <SidebarDropdown title="Inventory" links={inventoryLinks} icon={BaggageClaim} />

                    {/* <button className="flex items-center p-2 space-x-2">
                        <BaggageClaim className="w-4 h-4" />
                        <span>Inventory</span>
                    </button> */}

                    <SidebarDropdown title="Sales" links={salesLinks} icon={ShoppingBasket} />
                    {/* <button className="flex items-center p-2 space-x-2">
                        <ShoppingBasket className="w-4 h-4" />
                        <span>Sales</span>
                    </button> */}

                    <button className="flex items-center p-2 space-x-2">
                        <ShoppingBag className="w-4 h-4" />
                        <span>Purchases</span>
                    </button>

                    <Link className="flex items-center p-2 space-x-2" href="#">
                        <Cable className="w-4 h-4" />
                        <span>Integrations</span>
                    </Link>

                    <Link className="flex items-center p-2 space-x-2" href="#">
                        <BarChart className="w-4 h-4" />
                        <span>Reports</span>
                    </Link>

                    <Link className="flex items-center p-2 space-x-2" href="#">
                        <Files className="w-4 h-4" />
                        <span>Documents</span>
                    </Link>
                </nav>
                <SubscriptionCard />
            </div>



            {/* Bottom */}
            <div className="flex flex-col flex-end">
                {/* Logo */}
                <button className="flex items-center px-2 py-2.5 space-x-2 bg-slate-900 justify-center">
                    <ChevronLeft />
                </button>
                {/* Links */}
            </div>
            {/* card */}
            {/* footer icon */}
        </div>
    )
}
