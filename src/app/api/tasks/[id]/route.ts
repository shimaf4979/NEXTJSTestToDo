import { NextRequest } from "next/server";
import { TaskModel } from "@/models/task";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/database";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDatabase();
    const task = await TaskModel.findById(params.id);

    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Task found", task });
  } catch (error) {
    console.error("Failed to fetch task:", error);
    return NextResponse.json(
      { message: "Failed to fetch task" },
      { status: 500 }
    );
  }
};

export const dynamic = "force-dynamic";
