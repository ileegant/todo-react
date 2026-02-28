import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
  return (
    <li
      key={todo.id}
      className="flex justify-between items-center border-b border-gray-300 p-4"
    >
      <button
        onClick={() => {
          onToggle(todo.id);
        }}
        className={`${
          todo.isCompleted ? "line-through text-gray-400" : "text-gray-800"
        } cursor-pointer`}
      >
        {todo.content}
      </button>
      <button
        onClick={() => {
          onDelete(todo.id);
        }}
        className="text-xs font-black hover:text-red-500 cursor-pointer"
      >
        DELETE
      </button>
    </li>
  );
}

