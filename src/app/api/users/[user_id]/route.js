// route for [user_id] folder

import userModel from "@/models/userModel";
import { NextResponse } from "next/server";


export async function DELETE(req, { params }) {
  try {
    const { user_id } = params;
    const deletedUser = await userModel.findByIdAndDelete(user_id);
    if (!deletedUser) {
      return NextResponse.json(
        {
          msg: `User does not exists`,
          success: true,
        },
        { status: 400 }
      );
    }
    return NextResponse.json({
      msg: `User ${deletedUser?.username} deleted successfully`,
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      {
        msg: `Something went wrong`,
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { user_id } = params;
    const body = await req.json();

    const updateUser = await userModel.findByIdAndUpdate(user_id, body, {
      new: true,
    });
    return NextResponse.json({
      msg: "user updated successfully",
      success: true,
      newUser: updateUser,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      {
        msg: `Something went wrong`,
        success: false,
      },
      { status: 500 }
    );
  }
}
