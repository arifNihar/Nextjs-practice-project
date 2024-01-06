import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function CurrentStock({ items, title }) {
  const columnNames = [
    "imageUrl",
    "title",
    "sku",
    "barcode",
    "qty",
    "buying_price",
    "selling_price",
  ];
  return (
    <div className="p-8 bg-indigo-50">
      <h2 className="mb-6 text-xl">{title}</h2>
      <div className="my-4">
        <DataTable data={items} columnNames={columnNames} menuName="items" />
      </div>
    </div>
  );
}
