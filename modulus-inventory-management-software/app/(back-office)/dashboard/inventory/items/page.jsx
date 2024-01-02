import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData';

export default async function Items() {
    const data = await getData('items');
    const columnNames = ['title', 'sku', 'barcode', 'qty', 'buying_price', 'selling_price'];
    return (
        <div>
            <FixedHeader title="Items" newLink="/dashboard/inventory/items/new" />
            <div className="p-8 my-3">

                <DataTable data={data} columnNames={columnNames} menuName="items" />
            </div>
        </div>
    )
}
