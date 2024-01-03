import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params: { id } }) {
    try {
        const item = await db.item.findUnique({
            where: {
                id,
            },
            include: {
                category: true,
                brands: true,
                supplier: true,
                warehouse: true,
            }
        });

        return NextResponse.json(item);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to create a item",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(req, { params: { id } }) {
    const { title,
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
    } = await req.json();

    try {
        const item = await db.item.update({
            where: {
                id,
            },
            data: {
                title,
                category_id,
                sku,
                barcode,
                qty: parseInt(qty),
                unit_id,
                brand_id,
                buying_price: parseFloat(buying_price),
                selling_price: parseFloat(selling_price),
                supplier_id,
                reorder_point: parseInt(qty),
                warehouse_id,
                imageUrl,
                item_weight: parseFloat(item_weight),
                item_dimension,
                tax_rate: parseFloat(tax_rate),
                description,
                item_note
            },
        });

        return NextResponse.json(item);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to update a item",
            },
            {
                status: 500,
            }
        );
    }
}
