import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <div className="flex flex-2 flex-col space-y-4 p-6">
      <h2 className="text-2xl font-black">TODOS</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            content={todo.content}
            isComplited={todo.isComplited}
          />
        ))}
      </ul>
    </div>
  );
}
