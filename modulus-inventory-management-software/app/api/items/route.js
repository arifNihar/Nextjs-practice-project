import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      title,
      category_id,
      sku,
      barcode,
      qty,
      unit_id,
      brand_id,
      buying_price,
      selling_price,
      supplier_id,
      reorder_point,
      warehouse_id,
      imageUrl,
      item_weight,
      item_dimension,
      tax_rate,
      description,
      item_note,
    } = await req.json();

    const warehouse = await db.warehouse.findUnique({
      where: {
        id: warehouse_id,
      },
    });

    const currentWarehouseStock = warehouse.stock_qty;
    const warehouseStockUpdate = await db.warehouse.update({
      where: {
        id: warehouse_id,
      },
      data: {
        stock_qty: parseInt(currentWarehouseStock) + parseInt(qty),
      },
    });
    const item = await db.item.create({
      data: {
        title,
        category_id,
        sku,
        barcode,
        qty: parseInt(qty),
        unit_id,
        brand_id,
        buying_price: parseFloat(buying_price),
        selling_price: parseFloat(selling_price),
        supplier_id,
        reorder_point: parseInt(qty),
        warehouse_id,
        imageUrl,
        item_weight: parseFloat(item_weight),
        item_dimension,
        tax_rate: parseFloat(tax_rate),
        description,
        item_note,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Faild to create a item",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req) {
  try {
    const item = await db.item.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        category: true,
        brands: true,
        supplier: true,
        warehouse: true,
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Faild to create a item",
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
    const delete_item = await db.item.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(delete_item);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
        message: "Faild to Delete a item",
      },
      {
        status: 500,
      }
    );
  }
}
