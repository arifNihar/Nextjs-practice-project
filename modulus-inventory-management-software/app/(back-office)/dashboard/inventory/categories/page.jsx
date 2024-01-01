import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData';

export default async function Categories() {
    const data = await getData('categories');
    const columnNames = ['title', 'description'];
    return (
        <div>
            <FixedHeader title="Categories" newLink="/dashboard/inventory/categories/new" />
            <div className="p-8 my-3">

                <DataTable data={data} columnNames={columnNames} />
            </div>
        </div>
    )
}
