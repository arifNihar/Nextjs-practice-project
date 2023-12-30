import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {
            title,
            category_id,
            sku,
            barcode,
            qty,
            unit_id,
            brand_id,
            buying_price,
            selling_price,
            supplier_id,
            reorder_point,
            warehouse_id,
            imageUrl,
            item_weight,
            item_dimension,
            tax_rate,
            description,
            item_note,
        } = await req.json();

        const item = {
            title,
            category_id,
            sku,
            barcode,
            qty,
            unit_id,
            brand_id,
            buying_price,
            selling_price,
            supplier_id,
            reorder_point,
            warehouse_id,
            imageUrl,
            item_weight,
            item_dimension,
            tax_rate,
            description,
            item_note
        };
        console.log(item);
        return NextResponse.json(item);
    } catch (error) {
        return NextResponse.json(
            {
                error,
                message: "Faild to create a item",
            },
            {
                status: 500,
            }
        );
    }
}
