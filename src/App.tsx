import { useEffect, useState } from "react";
import "./App.css";
import type { Todo } from "./types";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import EmptyState from "./components/EmptyState";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos-data");
    return saved ? JSON.parse(saved) : [];
  });

  const activeTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  useEffect(() => {
    localStorage.setItem("todos-data", JSON.stringify(todos));
  }, [todos]);

  function handleDeleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleToggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function handleAddTodo(value: string) {
    const newTodo = {
      id: crypto.randomUUID(),
      content: value,
      isCompleted: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  }

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-white overflow-hidden">
      <div className="flex justify-around bg-gray-100 border-2 border-gray-200 rounded-sm w-[940px] h-[620px]">
        <div className="flex flex-2 flex-col space-y-4 p-6 text-gray-600 overflow-hidden">
          <TodoHeader
            todosCount={todos.length}
            completedCount={completedTodos.length}
          />
          {todos.length > 0 ? (
            <div className="overflow-y-auto no-scrollbar">
              <TodoList
                todos={activeTodos}
                onDelete={handleDeleteTodo}
                onToggle={handleToggleTodo}
              />
              <TodoList
                todos={completedTodos}
                onDelete={handleDeleteTodo}
                onToggle={handleToggleTodo}
              />
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
        <TodoForm onAdd={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;
