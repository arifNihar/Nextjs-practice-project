import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { title, abbreviation } = await req.json();

        const unit = await db.units.create({
            data: { title, abbreviation }
        });
        console.log(unit);
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