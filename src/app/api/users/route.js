import { NextResponse } from "next/server";
import userModel from "@/models/userModel";

// route of user folder

export async function GET(req, { params }) {
  const username = req.nextUrl.searchParams.get("username");
  const password = req.nextUrl.searchParams.get("password");
  console.log("creds", { username, password });
  try {
    const user = await userModel
      .findOne({ username, password })
      .select("-password");
    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { success: false, msg: "Something went wrong" },
      { status: 500 }
    );
  }
}

export function DELETE(req) {
  return NextResponse.json(
    { msg: "deleted" },
    { status: 200, statusText: "SUCCESS" }
  );
}

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    const newuser = await new userModel({ username, password }).save();

    return NextResponse.json({
      msg: "User created successfully",
      user: newuser,
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      msg: "Something went wrong",
      success: false,
    });
  }
}
