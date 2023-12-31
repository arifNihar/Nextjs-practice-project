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

        console.log(category);
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
