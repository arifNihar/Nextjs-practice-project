import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { title, location, type, description } = await req.json();

        const warehouse = await db.warehouse.create({
            data: { title, location, type, description }
        });

        console.log(warehouse);
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