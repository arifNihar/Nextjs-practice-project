import AdjustmentForm from "@/components/dashboard/AdjusmentForm";
import { getData } from "@/lib/getData";


export default async function Newadjustment() {
    const warehouses_data = getData("warehouse");
    const item_data = getData("items");

    const [warehouses, items] = await Promise.all([
        warehouses_data,
        item_data,
    ]);
    return (
        <AdjustmentForm warehouses={warehouses} items={items} />
    );
}
