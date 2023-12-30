import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { title, location, type, description } = await req.json();

        const warehouse = { title, location, type, description };
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