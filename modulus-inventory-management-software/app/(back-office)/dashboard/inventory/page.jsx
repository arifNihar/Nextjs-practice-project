"use client";

import { Shirt, Boxes, Component, ScrollText, HelpCircle, ChevronDown, LayoutGrid } from "lucide-react";
import FixedHeader from '@/components/dashboard/FixedHeader'
import Link from "next/link";
import OptionCard from "@/components/dashboard/OptionCard";

export default function Inventory() {
  const itemGroupsData = [
    {
      title: "Item Groups",
      description: "Create multiple variants of the same item using Iteem Groups",
      icon: Boxes,
      link: "/new/item-groups",
      link_title: "New Item Group",
      enabled: false,
    },
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      icon: Shirt,
      link: "#",
      link_title: "New Item",
      enabled: true,
    },
    {
      title: "Composite Items",
      description: "Bundle different items together and sell them as kits",
      icon: Component,
      link: "#",
      link_title: "New Composite Items",
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
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid gap-6 px-16 py-8 grid-col-1 lg:grid-cols-2">
        {itemGroupsData.map((item, idx) => {
          return (
            <OptionCard item={item} key={idx} />
          )
        })}
      </div>
    </div>
  )
}
