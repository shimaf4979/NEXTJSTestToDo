"use client";

import { FaTrashAlt } from "react-icons/fa";
import { deleteTask, FormState } from "@/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = { error: "" };
  const [formState, formAction] = useFormState(deleteTaskWithId, initialState);

  useEffect(() => {
    if (formState.error) {
      alert(formState.error);
    }
  }, [formState]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        title='Delete'
        type='submit'
        disabled={pending}
        className=' p-2 w-full rounded-md text-white bg-gray-800 hover:bg-red-700 text-sm font-semibold sdsm disabled:bg-gray-400'
      >
        <FaTrashAlt />
      </button>
    );
  };

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
};

export default TaskDeleteButton;
