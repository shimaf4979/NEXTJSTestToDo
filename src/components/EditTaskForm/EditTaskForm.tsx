"use client";

import React, { useState } from "react";
import { TaskDocument } from "@/models/task";
import { useFormState, useFormStatus } from "react-dom";
import { FormState, updateTask } from "@/actions/task";

interface EditTaskFormProps {
  task: TaskDocument;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const updateTaskWithId = updateTask.bind(null, task._id);
  const initialState: FormState = { error: "" };
  const [formState, formAction] = useFormState(updateTaskWithId, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type='submit'
        disabled={pending}
        className='mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-green-700 text-sm font-semibold sdsm'
      >
        Update
      </button>
    );
  };
  return (
    <div className='mt-10 mx-auto w-full max-w-sm'>
      <form action={formAction}>
        <div>
          <label htmlFor='title' className='block text-sm font-medium'>
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='mt-2 block w-full rounded-md border-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
          />
        </div>
        <div className='mt-6'>
          <label htmlFor='description' className='block text-sm font-medium'>
            Description
          </label>
          <input
            type='text'
            id='description'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='mt-2 block w-full rounded-md border-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
          />
        </div>
        <div className='mt-6'>
          <label htmlFor='dueDate' className='block text-sm font-medium'>
            Due Date
          </label>
          <input
            type='date'
            id='dueDate'
            name='dueDate'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            min='2000-01-01'
            max='2100-12-31'
            className='mt-2 block w-full rounded-md border-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
          />
        </div>

        <div className='mt-6 flex items-center'>
          <input
            type='checkbox'
            id='isCompleted'
            name='isCompleted'
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <label htmlFor='isCompleted' className='ml-2 text-sm font-medium'>
            Done
          </label>
        </div>
        <SubmitButton />
        {formState.error != "" && (
          <p className='text-red-500'>{formState.error}</p>
        )}
      </form>
    </div>
  );
};

export default EditTaskForm;
