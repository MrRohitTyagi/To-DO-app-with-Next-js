import userModel from "@/models/userModel";
import { NextResponse } from "next/server";
import { generateJWT } from "../helperFunctions";

export async function POST(req, { params }) {
  const { username, password } = await req.json();
  try {
    const user = await userModel
      .findOne({ username, password })
      .select("-password -__v");
    if (user) {
      const token = generateJWT({ ...user._doc });
      return NextResponse.json({ success: true, token, user });
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
