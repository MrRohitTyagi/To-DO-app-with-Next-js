import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { username, password } = await req.json();
  try {
    const user = await userModel
      .findOne({ username, password })
      .select("-password -__v");
    if (user) {
      return NextResponse.json({ success: true, user });
    } else {
      return NextResponse.json({ success: true, noUser: true });
    }
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { success: false, msg: "Something went wrong" },
      { status: 500 }
    );
  }
}
