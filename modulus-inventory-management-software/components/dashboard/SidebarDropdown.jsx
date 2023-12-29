"use client";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ShoppingCart, ChevronLeft, ChevronRight, Home, BaggageClaim, ShoppingBag, ShoppingBasket, Cable, BarChart, Files } from "lucide-react";

import CollapsibleLink from "./CollapsibleLink";

export default function SidebarDropdown({ title, links, icon: Icon }) {
    return (
        <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center p-2 space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{title}</span>
                </div>
                <ChevronRight className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent>
                {
                    links.map((item, idx) => {
                        return (
                            <CollapsibleLink item={item} key={idx} />
                        )
                    })
                }
            </CollapsibleContent>
        </Collapsible>
    )
}
