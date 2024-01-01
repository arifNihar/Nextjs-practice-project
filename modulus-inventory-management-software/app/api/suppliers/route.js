import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { name, phone, email, contact_person, address, supplier_code, payment_terms, taxt_id, supplier_note } = await req.json();

        const supplier = await db.supplier.create({
            data: { name, phone, email, contact_person, address, supplier_code, payment_terms, taxt_id, supplier_note }
        });
        console.log(supplier);
        return NextResponse.json(supplier);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a supplier"
        }, {
            status: 500
        })
    }
}

export async function GET(req) {
    try {
        const supplier = await db.supplier.findMany({
            orderBy: {
                created_at: "desc",
            }
        });
        return NextResponse.json(supplier);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a supplier"
        }, {
            status: 500
        })
    }
}