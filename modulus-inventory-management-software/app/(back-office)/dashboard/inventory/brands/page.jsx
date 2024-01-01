import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData';

export default async function Brands() {
    const data = await getData('brands');
    const columnNames = ['title', 'created_at'];
    return (
        <div>
            <FixedHeader title="Brands" newLink="/dashboard/inventory/brands/new" />
            <div className="p-8 my-3">

                <DataTable data={data} columnNames={columnNames} />
            </div>
        </div>
    )
}
