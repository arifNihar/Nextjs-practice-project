import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData';

export default async function Brands() {
    const data = await getData('brands');
    const columnNames = ['title', 'created_at'];
    return (
        <div>
            <FixedHeader title="Brands" newLink="/dashboard/inventory/brands/new" />
            <div className="w-full max-w-6xl px-4 py-2 mx-auto my-4">

                <DataTable data={data} columnNames={columnNames} menuName="brands" />
            </div>
        </div>
    )
}
