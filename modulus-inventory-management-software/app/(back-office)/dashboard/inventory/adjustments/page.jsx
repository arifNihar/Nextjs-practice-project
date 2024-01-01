import AdjustmentDataTable from "@/components/dashboard/AdjusmentDataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Adjustments() {
    const addData = await getData('adjustments/add');
    const addColumnNames = ['add_stock', 'reference_number', 'adjustment_note'];
    const transferData = await getData('adjustments/transfer');
    const transferColumnNames = ['transfer_stock', 'reference_number', 'adjustment_note'];
    return (
        <div>
            <FixedHeader title="Adjustments" newLink="/dashboard/inventory/adjustments/new" />
            <AdjustmentDataTable addData={addData} addColumnNames={addColumnNames} transferData={transferData} transferColumnNames={transferColumnNames} />
        </div>
    )
}
