import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params: { id } }) {
    try {
        const warehouseType = await db.warehouseType.findUnique({
            where: {
                id,
            },
        });

        return NextResponse.json(warehouseType);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to create a warehouse Type",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(req, { params: { id } }) {
    const {
        title, description
    } = await req.json();

    try {
        const warehouseType = await db.warehouseType.update({
            where: {
                id,
            },
            data: {
                title, description
            },
        });

        return NextResponse.json(warehouseType);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to update a warehouse Type",
            },
            {
                status: 500,
            }
        );
    }
}
