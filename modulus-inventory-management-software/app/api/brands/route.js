import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { title } = await req.json();

        const brand = await db.brands.create({
            data: { title }
        });
        console.log(brand);
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