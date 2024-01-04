import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {
            transfer_stock,
            reference_number,
            giving_warehouse_id,
            recieving_warehouse_id,
            item_id,
            supplier_id,
            adjustment_note,
        } = await req.json();

        const giving_warehouse = await db.warehouse.findUnique({
            where: {
                id: giving_warehouse_id,
            }
        });
        console.log(giving_warehouse.stock_qty)
        if (parseInt(giving_warehouse.stock_qty) > parseInt(transfer_stock)) {
            const currentGivingWarehouseStock = giving_warehouse.stock_qty;
            const givingWarehouseStockUpdate = await db.warehouse.update({
                where: {
                    id: giving_warehouse_id,
                },
                data: {
                    stock_qty: parseInt(currentGivingWarehouseStock) - parseInt(transfer_stock)
                }
            })

            const recieving_warehouse = await db.warehouse.findUnique({
                where: {
                    id: recieving_warehouse_id,
                }
            });

            const currentRecievingWarehouseStock = recieving_warehouse.stock_qty;
            const recievingWarehouseStockUpdate = await db.warehouse.update({
                where: {
                    id: recieving_warehouse_id,
                },
                data: {
                    stock_qty: parseInt(currentRecievingWarehouseStock) + parseInt(transfer_stock)
                }
            })

            const adjustment = await db.transferStockAdjusment.create({
                data: {
                    transfer_stock: parseInt(transfer_stock),
                    reference_number,
                    giving_warehouse_id,
                    recieving_warehouse_id,
                    item_id,
                    supplier_id,
                    adjustment_note,
                },
            });
            return NextResponse.json(adjustment);
        } else {
            return NextResponse.json(
                {
                    data: null,
                    message: "Transfer stock is insufficient!",
                },
                {
                    status: 409,
                }
            );
        }
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to create a adjustment",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(req) {
    try {
        const adjustment = await db.transferStockAdjusment.findMany({
            orderBy: {
                created_at: "desc",
            },
            include: {
                warehouse: true
            }
        });

        return NextResponse.json(adjustment);
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            message: "Faild to create a adjustment"
        }, {
            status: 500
        })
    }
}

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id");
        const delete_transferStockAdjusment = await db.transferStockAdjusment.delete({
            where: {
                id
            }
        });
        return NextResponse.json(delete_transferStockAdjusment);
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            message: "Faild to Delete a Transfer Stock Adjusment"
        }, {
            status: 500
        })
    }
}