"use server";
import { Task, TaskModel } from "../models/task";
import { connectToDatabase } from "../utils/database";
import { redirect } from "next/navigation";
export interface FormState {
  error: string;
}

export const createTask = async (formState: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    await connectToDatabase();
    await TaskModel.create(newTask);
  } catch (error) {
    console.error("Failed to create task:", error);
    return { error: "データベースエラー: タスクの作成に失敗しました" };
  }
  redirect("/");
};

export const updateTask = async (
  id: string,
  prevState: FormState,
  formData: FormData
) => {
  const updatedTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: Boolean(formData.get("isCompleted")) as boolean,
  };
  try {
    await connectToDatabase();
    await TaskModel.updateOne({ _id: id }, updatedTask);
  } catch (error) {
    console.error("Failed to update task:", error);
    return { error: "データベースエラー: タスクの更新に失敗しました" };
  }
  redirect("/");
};

export const deleteTask = async (id: string) => {
  try {
    await connectToDatabase();
    await TaskModel.deleteOne({ _id: id });
  } catch (error) {
    console.error("Failed to delete task:", error);
    return { error: "データベースエラー: タスクの削除に失敗しました" };
  }
  redirect("/");
};
