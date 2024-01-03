import FixedHeader from "@/components/dashboard/FixedHeader";
import WarehouseDataTable from "@/components/dashboard/WarehouseDataTable";
import { getData } from "@/lib/getData";

export default async function Warehouse() {
    const warehouse_data = await getData("warehouse");
    const warehouse_columnNames = ["title", "location", "description", "warehouse_type.title", "created_at"];
    const warehouse_type_data = await getData("warehouse/type");
    const warehouse_type_columnNames = ["title", "description", "created_at"];
    return (
        <div>
            <FixedHeader
                title="Warehouses"
                newLink="/dashboard/inventory/warehouse/new"
            />
            <WarehouseDataTable
                warehouse_data={warehouse_data}
                warehouse_columnNames={warehouse_columnNames}
                warehouse_type_data={warehouse_type_data}
                warehouse_type_columnNames={warehouse_type_columnNames}
            />
        </div>
    );
}
