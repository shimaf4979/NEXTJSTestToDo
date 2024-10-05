import { TaskDocument, TaskModel } from "@/models/task";
import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
    const allTasks: TaskDocument[] = await TaskModel.find();

    return NextResponse.json({
      message: "タスクを取得しました",
      tasks: allTasks,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "タスクの取得に失敗しました", error: error },
      { status: 500 }
    );
  }
};

export const dynamic = "force-dynamic";
