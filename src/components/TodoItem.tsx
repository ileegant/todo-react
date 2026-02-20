import type { Todo } from "../types";

interface TodoItemProps extends Todo {
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function TodoItem({
  id,
  content,
  isCompleted,
  onDelete,
  onToggle,
}: TodoItemProps) {
  return (
    <li
      key={id}
      className="flex justify-between items-center border-b border-gray-300 p-4"
    >
      <button
        onClick={() => {
          onToggle(id);
        }}
        className={`${
          isCompleted ? "line-through text-gray-400" : "text-gray-800"
        } cursor-pointer`}
      >
        {content}
      </button>
      <button
        onClick={() => {
          onDelete(id);
        }}
        className="text-xs font-black hover:text-red-500 cursor-pointer"
      >
        DELETE
      </button>
    </li>
  );
}
