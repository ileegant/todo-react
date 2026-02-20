import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function TodoList({ todos, onDelete, onToggle }: TodoListProps) {
  return (
    <div className="flex flex-2 flex-col space-y-4 p-6 text-gray-600">
      <div className="flex justify-between text-sm">
        <h2 className="text-2xl font-black">TODOS</h2>
        <h4>0/3 Complited</h4>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isComplited={todo.isComplited}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}
