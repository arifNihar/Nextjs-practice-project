import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { title, abbreviation } = await req.json();

        const unit = await db.units.create({
            data: { title, abbreviation }
        });
        return NextResponse.json(unit);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a unit"
        }, {
            status: 500
        })
    }
}

export async function GET(req) {
    try {
        const unit = await db.units.findMany({
            orderBy: {
                created_at: "desc",
            }
        });

        return NextResponse.json(unit);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a unit"
        }, {
            status: 500
        })
    }
}

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id");
        const delete_units = await db.units.delete({
            where: {
                id
            }
        });
        return NextResponse.json(delete_units);
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            message: "Faild to Delete a units"
        }, {
            status: 500
        })
    }
}