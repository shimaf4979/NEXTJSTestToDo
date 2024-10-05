import Link from "next/link";
import { FaPen } from "react-icons/fa";

interface TaskEditButtonProps {
  id: string;
}

const TaskEditButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <Link
      href={`/edit/${id}`}
      className='text-sm p-2 rounded-md bg-gray-800 hover:bg-green-700 text-white'
    >
      <FaPen className='' />
    </Link>
  );
};

export default TaskEditButton;
