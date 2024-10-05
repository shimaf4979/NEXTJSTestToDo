import NewTaskForm from "@/components/NewTaskForm/NewTaskForm";
import React from "react";

const NewTaskPage = () => {
  return (
    <div
      className='flex flex-col
 justify-center py-20'
    >
      <h2 className='text-2xl font-bold text-center'>Create New Task</h2>
      <NewTaskForm />
    </div>
  );
};

export default NewTaskPage;
