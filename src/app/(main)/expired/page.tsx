import React from "react";
import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";
const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/expired`, {
    cache: "no-store",
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch expired tasks");
  }
  const data = await response.json();
  return data.tasks as TaskDocument[];
};

const ExpiredTasksPage = async () => {
  const tasks = await getExpiredTasks();
  return (
    <div className='text-gray-800 h-full overflow-auto pb-24 p-8'>
      <header className='flex justify-between items-center '>
        <h1 className='text-2xl items-center font-bold'>Expired Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ExpiredTasksPage;
