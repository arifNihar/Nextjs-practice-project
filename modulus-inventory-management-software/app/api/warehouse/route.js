import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { title, location, type: warehouse_type_id, description } = await req.json();

        const warehouse = await db.warehouse.create({
            data: { title, location, warehouse_type_id, description }
        });

        return NextResponse.json(warehouse);
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
        const warehouse = await db.warehouse.findMany({
            orderBy: {
                created_at: "desc",
            },
            include: {
                warehouse_type: true,
            }
        });
        return NextResponse.json(warehouse);
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            message: "Faild to create a warehouse"
        }, {
            status: 500
        })
    }
}

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id");
        const delete_warehouse = await db.warehouse.delete({
            where: {
                id
            }
        });
        return NextResponse.json(delete_warehouse);
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            message: "Faild to Delete a warehouse"
        }, {
            status: 500
        })
    }
}