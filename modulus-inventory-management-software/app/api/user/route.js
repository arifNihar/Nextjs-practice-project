import db from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const userExist = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      return NextResponse.json(
        {
          message: "User already exists",
          user: null,
        },
        {
          status: 409,
        }
      );
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Faild to create a new User",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req) {
  try {
    const user = await db.user.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Faild to create a user",
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
    const delete_user = await db.user.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(delete_user);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
        message: "Faild to Delete a user",
      },
      {
        status: 500,
      }
    );
  }
}
