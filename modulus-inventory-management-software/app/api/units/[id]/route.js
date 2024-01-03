import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params: { id } }) {
    try {
        const units = await db.units.findUnique({
            where: {
                id,
            },
        });

        return NextResponse.json(units);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to create a units",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(req, { params: { id } }) {
    const {
        title, abbreviation
    } = await req.json();

    try {
        const units = await db.units.update({
            where: {
                id,
            },
            data: {
                title, abbreviation
            },
        });

        return NextResponse.json(units);
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Faild to update a units",
            },
            {
                status: 500,
            }
        );
    }
}
