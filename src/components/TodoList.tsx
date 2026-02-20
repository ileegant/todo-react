import type { Todo } from "../types";
import EmptyState from "./EmptyState";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TodoList({ todos, onDelete, onToggle }: TodoListProps) {
  const todosCount = todos.length;

  return (
    <>
      {todosCount === 0 ? (
        <EmptyState />
      ) : (
        <>
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                content={todo.content}
                isCompleted={todo.isCompleted}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
}
