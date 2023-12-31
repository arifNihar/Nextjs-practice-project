import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      add_stock,
      reference_number,
      recieving_warehouse_id,
      item_id,
      supplier_id,
      adjustment_note,
    } = await req.json();

    const item = await db.item.findUnique({
      where: {
        id: item_id,
      },
    });

    const currentItemStock = item.qty;
    const itemStockUpdate = await db.item.update({
      where: {
        id: item_id,
      },
      data: {
        qty: parseInt(currentItemStock) + parseInt(add_stock),
      },
    });

    // console.log(itemStockUpdate);
    const warehouse = await db.warehouse.findUnique({
      where: {
        id: recieving_warehouse_id,
      },
    });

    const currentWarehouseStock = warehouse.stock_qty;
    const warehouseStockUpdate = await db.warehouse.update({
      where: {
        id: recieving_warehouse_id,
      },
      data: {
        stock_qty: parseInt(currentWarehouseStock) + parseInt(add_stock),
      },
    });
    // console.log(warehouseStockUpdate);
    const adjustment = await db.addStockAdjusment.create({
      data: {
        add_stock: parseInt(add_stock),
        reference_number,
        recieving_warehouse_id,
        item_id,
        supplier_id,
        adjustment_note,
      },
    });
    console.log(adjustment);
    return NextResponse.json(adjustment);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Faild to create a adjustment",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req) {
  try {
    const adjusment = await db.addStockAdjusment.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        warehouse: true,
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

export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const delete_addStockAdjusment = await db.addStockAdjusment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(delete_addStockAdjusment);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
        message: "Faild to Delete a Add Stock Adjusment",
      },
      {
        status: 500,
      }
    );
  }
}
