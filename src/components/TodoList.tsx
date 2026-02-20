import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function TodoList({ todos, onDelete, onToggle }: TodoListProps) {
  return (
    <div className="flex flex-2 flex-col space-y-4 p-6">
      <h2 className="text-2xl font-black">TODOS</h2>
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
