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
            adjustment_note,
        } = await req.json();

        const adjustment = await db.transferStockAdjusment.create({
            data: {
                transfer_stock: parseInt(transfer_stock),
                reference_number,
                giving_warehouse_id,
                recieving_warehouse_id,
                item_id,
                adjustment_note,
            },
        });
        return NextResponse.json(adjustment);
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