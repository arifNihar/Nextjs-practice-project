import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params: { id } }) {
    try {
        const warehouse = await db.warehouse.findUnique({
            where: {
                id,
            },
        });

        return NextResponse.json(warehouse);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to create a warehouse",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(req, { params: { id } }) {
    const {
        title, location, warehouse_type_id, description
    } = await req.json();

    try {
        const warehouse = await db.warehouse.update({
            where: {
                id,
            },
            data: {
                title, location, warehouse_type_id, description
            },
        });

        return NextResponse.json(warehouse);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to update a warehouse",
            },
            {
                status: 500,
            }
        );
    }
}
