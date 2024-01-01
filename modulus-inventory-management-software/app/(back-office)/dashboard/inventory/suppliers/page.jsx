import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData';

export default async function Suppliers() {
    const data = await getData('suppliers');
    const columnNames = ['name', 'phone', 'email', 'address'];
    return (
        <div>
            <FixedHeader title="Suppliers" newLink="/dashboard/inventory/suppliers/new" />
            <div className="p-8 my-3">

                <DataTable data={data} columnNames={columnNames} />
            </div>
        </div>
    )
}
