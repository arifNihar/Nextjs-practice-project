import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { title, description } = await req.json();

        const category = await db.category.create({
            data: {
                title: title,
                description: description
            },
        });
        return NextResponse.json(category);
    } catch (error) {
        return NextResponse.json(
            {
                error,
                message: "Faild to create a category",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(req) {
    try {
        const category = await db.category.findMany({
            orderBy: {
                created_at: "desc",
            }
        });
        return NextResponse.json(category);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Faild to create a category"
        }, {
            status: 500
        })
    }
}