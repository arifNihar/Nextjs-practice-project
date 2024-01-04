import AdjustmentForm from "@/components/dashboard/AdjusmentForm";
import { getData } from "@/lib/getData";

export default async function Newadjustment({
  initialdata = {},
  isUpdate = false,
  tab = "add",
}) {
  const warehouses_data = getData("warehouse");
  const item_data = getData("items");
  const suppliers_data = getData("suppliers");

  const [warehouses, items, suppliers] = await Promise.all([
    warehouses_data,
    item_data,
    suppliers_data,
  ]);
  return (
    <AdjustmentForm
      warehouses={warehouses}
      items={items}
      suppliers={suppliers}
      initialdata={initialdata}
      isUpdate={isUpdate}
      tab={tab}
    />
  );
}
