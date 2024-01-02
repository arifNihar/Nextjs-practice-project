import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { id } }) {
    try {
        const brand = await db.brands.findUnique({
            where: {
                id
            }
        });

        return NextResponse.json(brand);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a brand"
        }, {
            status: 500
        })
    }
}

export async function PUT(req, { params: { id } }) {
    const { title } = await req.json();

    try {
        const brand = await db.brands.update({
            where: {
                id
            },
            data: {
                title
            }
        });

        return NextResponse.json(brand);
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            message: "Faild to update a brand"
        }, {
            status: 500
        })
    }
}