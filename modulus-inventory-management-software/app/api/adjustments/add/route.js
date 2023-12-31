import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { add_stock, reference_number, recieving_warehouse_id, adjustment_note } = await req.json();

        const adjustment = { add_stock, reference_number, recieving_warehouse_id, adjustment_note };
        console.log(adjustment);
        return NextResponse.json(adjustment);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a adjustment"
        }, {
            status: 500
        })
    }
}