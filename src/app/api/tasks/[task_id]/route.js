import tasksModel from "@/models/tasksModel";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { task_id } = params;
    const task = await req.json();
    const updatedtask = await tasksModel.findByIdAndUpdate(task_id, task, {
      new: true,
    });
    return NextResponse.json({ success: true, task: updatedtask });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { success: false, msg: "Something went wrong" },
      { status: 500 }
    );
  }
}
export async function DELETE(req, { params }) {
  try {
    const { task_id } = params;

    await tasksModel.findByIdAndDelete(task_id);
    return NextResponse.json({
      success: true,
      msg: "task deleted successfully",
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { success: false, msg: "Something went wrong" },
      { status: 500 }
    );
  }
}
