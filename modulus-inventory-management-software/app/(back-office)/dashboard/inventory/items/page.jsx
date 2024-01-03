import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData';

export default async function Items() {
    const data = await getData('items');
    const columnNames = ['imageUrl', 'title', 'sku', 'barcode', 'qty', 'buying_price', 'selling_price', "category.title", "brands.title", "warehouse.title", "supplier.name", 'created_at'];
    return (
        <div>
            <FixedHeader title="Items" newLink="/dashboard/inventory/items/new" />
            <div className="p-8 my-3">

                <DataTable data={data} columnNames={columnNames} menuName="items" />
            </div>
        </div>
    )
}
