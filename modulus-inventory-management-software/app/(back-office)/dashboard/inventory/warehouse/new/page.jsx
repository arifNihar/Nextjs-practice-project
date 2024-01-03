

import FormHeader from "@/components/dashboard/FormHeader";
import WarehouseForm from "@/components/dashboard/WarehouseForm";
import { getData } from "@/lib/getData";

export default async function NewWarehouse({ initialdata = {}, isUpdate = {} }) {
    const warehouse_type = getData("/warehouse/type");
    const [warehouse_types] = await Promise.all([warehouse_type]);
    console.log(warehouse_types)
    return (
        <div>
            <FormHeader title={isUpdate ? "Update Warehouse" : "New Warehouse"} href="/dashboard/inventory" />
            <WarehouseForm warehouse_types={warehouse_types} initialdata={initialdata} isUpdate={isUpdate} />
        </div >
    )
}
