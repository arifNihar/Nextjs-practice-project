import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData';

export default async function Units() {
    const data = await getData('units');
    const columnNames = ['title', 'abbreviation'];
    return (
        <div>
            <FixedHeader title="Units" newLink="/dashboard/inventory/units/new" />
            <div className="w-full max-w-6xl px-4 py-2 mx-auto my-4">

                <DataTable data={data} columnNames={columnNames} menuName="units" />
            </div>
        </div>
    )
}
