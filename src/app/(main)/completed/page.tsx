import TaskCard from "@/components/TaskCard/TaskCard";
import React from "react";
import { TaskDocument } from "@/models/task";
//testing

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/completed`, {
    cache: "no-store",
  });
  if (response.status !== 200) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

const CompletedPage = async () => {
  const completedTasks = await getCompletedTasks();
  return (
    <div className='text-gray-800 h-full overflow-auto pb-24 p-8'>
      <header className='flex justify-between items-center '>
        <h1 className='text-2xl items-center font-bold'>Completed Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {completedTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedPage;
