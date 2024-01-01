"use client";

import { Shirt, Boxes, Factory, ScrollText, Combine, BookHeart, Warehouse, Ribbon, Puzzle } from "lucide-react";
import FixedHeader from '@/components/dashboard/FixedHeader'
import Link from "next/link";
import OptionCard from "@/components/dashboard/OptionCard";

export default function Inventory() {
  const itemGroupsData = [
    {
      title: "Categories",
      description: "Create standalone items and services that you buy and sell",
      icon: Boxes,
      link: "/dashboard/inventory/categories/new",
      link_title: "New Category",
      enabled: true,
    },
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      icon: Shirt,
      link: "/dashboard/inventory/items/new",
      link_title: "New Item",
      enabled: true,
    },
    {
      title: "Brands",
      description: "Create standalone items and services that you buy and sell",
      icon: Ribbon,
      link: "/dashboard/inventory/brands/new",
      link_title: "New Brand",
      enabled: true,
    },
    {
      title: "Units",
      description: "Create standalone items and services that you buy and sell",
      icon: Combine,
      link: "/dashboard/inventory/units/new",
      link_title: "New Units",
      enabled: true,
    },
    {
      title: "Warehouse",
      description: "Create standalone items and services that you buy and sell",
      icon: Warehouse,
      link: "/dashboard/inventory/warehouse/new",
      link_title: "New Warehouse",
      enabled: true,
    },
    {
      title: "Suppliers",
      description: "Create standalone items and services that you buy and sell",
      icon: Factory,
      link: "/dashboard/inventory/suppliers/new",
      link_title: "New Supplier",
      enabled: true,
    },
    {
      title: "Inventory Adjustments",
      description: "Transfer stock from the main warehouse",
      icon: Puzzle,
      link: "/dashboard/inventory/adjustments/new",
      link_title: "New Adjustments",
      enabled: true,
    },
    {
      title: "Price Lists",
      description: "Tweak your item prices for specific contacts or transactions",
      icon: ScrollText,
      link: "#",
      link_title: "New Price Lists",
      enabled: true,
    },

  ]
  return (
    <div>
      <FixedHeader title="Items" newLink="/dashboard/inventory" />
      <div className="grid gap-6 px-16 py-8 grid-col-1 lg:grid-cols-3 md:grid-cols-2">
        {itemGroupsData.map((item, idx) => {
          return (
            <OptionCard item={item} key={idx} />
          )
        })}
      </div>
    </div>
  )
}
