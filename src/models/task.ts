import { Document } from "mongoose";
import mongoose from "mongoose";
export interface Task {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

export interface TaskDocument extends Task, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

//Schemaとは、データベースのデータ構造を定義するもの
const taskSchema = new mongoose.Schema<TaskDocument>(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
//createdAtとupdatedAtを自動で作成する

export const TaskModel =
  mongoose.models.Task || mongoose.model("Task", taskSchema);
