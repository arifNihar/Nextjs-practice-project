import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params: { id } }) {
  try {
    const adjusment = await db.transferStockAdjusment.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(adjusment);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Faild to create a adjusment",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req, { params: { id } }) {
  const {
    transfer_stock,
    reference_number,
    giving_warehouse_id,
    recieving_warehouse_id,
    item_id,
    adjustment_note,
  } = await req.json();

  try {
    const adjusment = await db.transferStockAdjusment.update({
      where: {
        id,
      },
      data: {
        transfer_stock: parseInt(transfer_stock),
        reference_number,
        giving_warehouse_id,
        recieving_warehouse_id,
        item_id,
        adjustment_note,
      },
    });

    return NextResponse.json(adjusment);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
        message: "Faild to update a adjusment",
      },
      {
        status: 500,
      }
    );
  }
}
