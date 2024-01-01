import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { title } = await req.json();

        const brand = await db.brands.create({
            data: { title }
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

export async function GET(req) {
    try {
        const brand = await db.brands.findMany({
            orderBy: {
                created_at: "desc",
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