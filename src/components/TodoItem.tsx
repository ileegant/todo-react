import type { Todo } from "../types";

export default function TodoItem({ id, content, isComplited }: Todo) {
  return (
    <li
      key={id}
      className="flex justify-between items-center border-b border-gray-300 p-4"
    >
      <button
        className={`${
          isComplited ? "line-through text-gray-200" : "text-gray-800"
        }`}
      >
        {content}
      </button>
      <button className="text-xs font-black hover:text-red-500 cursor-pointer">
        DELETE
      </button>
    </li>
  );
}
