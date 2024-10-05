import { connectToDatabase } from "@/utils/database";
import { TaskModel, TaskDocument } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: true,
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
