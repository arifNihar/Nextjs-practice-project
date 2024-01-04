import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { title, description } = await req.json();

        const warehouse_type = await db.warehouseType.create({
            data: { title, description }
        });

        return NextResponse.json(warehouse_type);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a warehouse"
        }, {
            status: 500
        })
    }
}

export async function GET(req) {
    try {
        const warehouse_type = await db.warehouseType.findMany({
            orderBy: {
                created_at: "desc",
            }
        });
        return NextResponse.json(warehouse_type);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a warehouse"
        }, {
            status: 500
        })
    }
}

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id");
        const delete_warehouseType = await db.warehouseType.delete({
            where: {
                id
            }
        });
        return NextResponse.json(delete_warehouseType);
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            message: "Faild to Delete a warehouse Type"
        }, {
            status: 500
        })
    }
}