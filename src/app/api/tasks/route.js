import tasksModel from "@/models/tasksModel";
import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";

//create a task
export async function POST(req, { params }) {
  try {
    const task = await req.json();
    const newTask = await tasksModel.create(task);
    return NextResponse.json({ success: true, task: newTask });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { success: false, msg: "Something went wrong" },
      { status: 500 }
    );
  }
}

// get all tasks

export async function GET(req, { params }) {
  let token = req.headers.get("token");
  const decodeduser = jwtDecode(token);
  try {
    const tasks = await tasksModel.find({ belongs_to: decodeduser._id });

    return NextResponse.json({ success: true, tasks });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { success: false, msg: "Something went wrong" },
      { status: 500 }
    );
  }
}
