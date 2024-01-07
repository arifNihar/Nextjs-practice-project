import { getData } from "@/lib/getData";
import InventorySummaryCard from "./InventorySummaryCard";
import SalesActivityCard from "./SalesActivityCard";
import { CheckCircle2, Truck, PackageCheck, BadgeCent } from "lucide-react";
export default async function SalesOverview() {
  const categories_data = getData("categories");
  const units_data = getData("units");
  const brands_data = getData("brands");
  const warehouses_data = getData("warehouse");
  const suppliers_data = getData("suppliers");

  const [categories, units, brands, warehouses, suppliers] = await Promise.all([
    categories_data,
    units_data,
    brands_data,
    warehouses_data,
    suppliers_data,
  ]);

  const inventorySummary = warehouses?.map((item, i) => {
    return {
      title: item.title,
      number: item.stock_qty,
    };
  });

  const inventoryActivity = [
    {
      title: "Category",
      number: categories?.length || 0,
      href: "/dashboard/inventory/categories",
      unit: "",
      color: "text-blue-600",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      title: "Brands",
      number: brands?.length || 0,
      href: "/dashboard/inventory/brands",
      unit: "",
      color: "text-blue-600",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      title: "Suppliers",
      number: suppliers?.length || 0,
      href: "/dashboard/inventory/suppliers",
      unit: "",
      color: "text-blue-600",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      title: "Warehouses",
      number: warehouses?.length || 0,
      href: "/dashboard/inventory/warehouse",
      unit: "",
      color: "text-blue-600",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
  ];

  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-violet-600",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      title: "To be Shipped",
      number: 5,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
      icon: <Truck className="w-4 h-4" />,
    },
    {
      title: "To be Delevered",
      number: 10,
      unit: "Pkgs",
      href: "#",
      color: "text-green-600",
      icon: <PackageCheck className="w-4 h-4" />,
    },
    {
      title: "To be Invoiced",
      number: 8,
      unit: "Pkgs",
      href: "#",
      color: "text-amber-600",
      icon: <BadgeCent className="w-4 h-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 border-b bg-indigo-50 border-slate-200">
      <div className="p-8 pt-16 pb-8 border-r lg:py-8 col-span-full lg:col-span-8 border-slate-300">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className="grid gap-3 pr-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {inventoryActivity.map((item, idx) => {
            return <SalesActivityCard item={item} key={idx} />;
          })}
        </div>
      </div>
      <div className="p-8 col-span-full lg:col-span-4">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div className="flex flex-col gap-3">
          {inventorySummary?.map((item, idx) => {
            return <InventorySummaryCard item={item} key={idx} />;
          })}
        </div>
      </div>
      <div className="p-8 py-8 border-r lg:py-8 col-span-full lg:col-span-8 border-slate-300">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className="grid gap-3 pr-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {salesActivity.map((item, idx) => {
            return <SalesActivityCard item={item} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}
