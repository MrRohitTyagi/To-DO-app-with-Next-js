import { NextResponse } from "next/server";
import userModel from "@/models/userModel";
import { jwtDecode } from "jwt-decode";
import { generateJWT } from "../helperFunctions";

export async function GET(req, { params }) {
  const token = req.headers.get("token");

  try {
    const decodeduser = jwtDecode(token);
    const user = await userModel
      .findById(decodeduser._id)
      .select("-password -__v");
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

    const { password: pass, __v, ...rest } = newuser._doc;
    const token = generateJWT(rest);

    return NextResponse.json({
      msg: "User created successfully",
      user: rest,
      success: true,
      token,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      {
        msg: "Something went wrong",
        success: false,
      },
      { status: 500 }
    );
  }
}
