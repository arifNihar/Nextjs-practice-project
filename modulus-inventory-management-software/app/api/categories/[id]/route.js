import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { id } }) {
    try {
        const category = await db.category.findUnique({
            where: {
                id
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

export async function PUT(req, { params: { id } }) {
    const { title, description } = await req.json();

    try {
        const category = await db.category.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        });

        return NextResponse.json(category);
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            message: "Faild to update a category"
        }, {
            status: 500
        })
    }
}