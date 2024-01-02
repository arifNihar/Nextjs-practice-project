import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params: { id } }) {
    try {
        const supplier = await db.supplier.findUnique({
            where: {
                id,
            },
        });

        return NextResponse.json(supplier);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to create a supplier",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(req, { params: { id } }) {
    const {
        name,
        phone,
        email,
        contact_person,
        address,
        supplier_code,
        payment_terms,
        taxt_id,
        supplier_note,
    } = await req.json();

    try {
        const supplier = await db.supplier.update({
            where: {
                id,
            },
            data: {
                name,
                phone,
                email,
                contact_person,
                address,
                supplier_code,
                payment_terms,
                taxt_id,
                supplier_note,
            },
        });

        return NextResponse.json(supplier);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to update a supplier",
            },
            {
                status: 500,
            }
        );
    }
}
