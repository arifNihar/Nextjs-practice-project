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
            error: error.message,
            message: "Faild to create a category"
        }, {
            status: 500
        })
    }
}

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id");
        console.log(id);
        const delete_category = await db.category.delete({
            where: {
                id
            }
        });
        return NextResponse.json(delete_category);
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            message: "Faild to Delete a category"
        }, {
            status: 500
        })
    }
}