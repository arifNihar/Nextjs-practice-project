import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import CreateItemForm from "@/components/dashboard/CreateItemForm";

export default async function NewItem() {
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

    return (
        <div>
            <FormHeader title="New Item" href="/dashboard/inventory" />
            <CreateItemForm
                categories={categories}
                brands={brands}
                units={units}
                warehouses={warehouses}
                suppliers={suppliers}
            />
        </div>
    );
}
