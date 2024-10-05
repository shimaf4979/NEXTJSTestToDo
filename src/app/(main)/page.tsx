import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

const getAllTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks`, {
    cache: "no-store",
  });
  if (response.status !== 200) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

export default async function MainPage() {
  const allTasks = await getAllTasks();
  return (
    <div className='text-gray-800 h-full overflow-auto pb-24 p-8'>
      <header className='flex justify-between items-center '>
        <h1 className='text-2xl items-center font-bold'>All Tasks</h1>
        <Link
          href='/new'
          className='flex items-center gap-1 font-semibold px-4 py-2 rounded-full shadow-sm text-white bg-gray-800 hover:bg-green-700'
        >
          <MdAddTask className='size-5' />
          <div>Add Task</div>
        </Link>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {allTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
