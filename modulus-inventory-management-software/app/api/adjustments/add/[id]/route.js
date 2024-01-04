import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params: { id } }) {
    try {
        const adjusment = await db.addStockAdjusment.findUnique({
            where: {
                id,
            },
        });

        return NextResponse.json(adjusment);
    } catch (error) {
        return NextResponse.json(
            {
                error,
                message: "Faild to create a adjusment",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(req, { params: { id } }) {
    try {
        const {
            add_stock,
            reference_number,
            recieving_warehouse_id,
            item_id,
            supplier_id,
            adjustment_note,
        } = await req.json();

        const item = await db.item.findUnique({
            where: {
                id: item_id,
            }
        });
        const current_qty = item.qty;

        const item_update = await db.item.update({
            where: {
                id: item_id,
            },
            data: {
                qty: parseInt(current_qty) + parseInt(add_stock)
            }
        });

        // console.log(itemStockUpdate);
        const warehouse = await db.warehouse.findUnique({
            where: {
                id: recieving_warehouse_id,
            }
        });

        const currentWarehouseStock = warehouse.stock_qty;
        const warehouseStockUpdate = await db.warehouse.update({
            where: {
                id: recieving_warehouse_id,
            },
            data: {
                stock_qty: parseInt(currentWarehouseStock) + parseInt(add_stock)
            }
        })

        const adjusment = await db.addStockAdjusment.update({
            where: {
                id,
            },
            data: {
                add_stock: parseInt(add_stock),
                reference_number,
                recieving_warehouse_id,
                item_id,
                supplier_id,
                adjustment_note,
            },
        });

        return NextResponse.json(adjusment);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to update a adjusment",
            },
            {
                status: 500,
            }
        );
    }
}
