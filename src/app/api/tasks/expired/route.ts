import { connectToDatabase } from "@/utils/database";
import { TaskModel, TaskDocument } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  const currentDate = new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
  //これでyyyy-mm-ddとなる

  try {
    await connectToDatabase();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate },
    });
    return NextResponse.json({
      message: "Completed tasks fetched successfully",
      tasks: completedTasks,
    });
  } catch (error) {
    console.error("Failed to fetch completed tasks:", error);
    return NextResponse.json(
      { error: "Failed to fetch completed tasks" },
      { status: 500 }
    );
  }
};

export const dynamic = "force-dynamic";
