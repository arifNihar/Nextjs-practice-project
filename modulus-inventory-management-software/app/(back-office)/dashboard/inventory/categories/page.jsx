import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData';

export default async function Categories() {
    const data = await getData('categories');
    const columnNames = ['title', 'description'];
    return (
        <div>
            <FixedHeader title="Categories" newLink="/dashboard/inventory/categories/new" />
            <div className="w-full max-w-6xl px-4 py-2 mx-auto my-4">

                <DataTable data={data} columnNames={columnNames} menuName="categories" />
            </div>
        </div>
    )
}
