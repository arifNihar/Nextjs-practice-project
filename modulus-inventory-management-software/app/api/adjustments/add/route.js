import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {
            add_stock,
            reference_number,
            recieving_warehouse_id,
            item_id,
            adjustment_note,
        } = await req.json();

        const adjustment = await db.addStockAdjusment.create({
            data: {
                add_stock: parseInt(add_stock),
                reference_number,
                recieving_warehouse_id,
                item_id,
                adjustment_note,
            },
        });
        return NextResponse.json(adjustment);
    } catch (error) {
        return NextResponse.json(
            {
                error,
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
        const adjusment = await db.addStockAdjusment.findMany({
            orderBy: {
                created_at: "desc",
            }
        });

        return NextResponse.json(adjusment);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a adjusment"
        }, {
            status: 500
        })
    }
}