import { useState } from "react";
import "./App.css";
import type { Todo } from "./types";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initial_todos } from "./lib/constants";

function App() {
  const [todos, setTodos] = useState<Todo[]>(initial_todos);

  function handleDeleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleToggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function handleAddTodo(value: string) {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    const newTodo = {
      id: newId,
      content: value,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-white overflow-hidden">
      <div className="flex justify-around bg-gray-100 border-2 border-gray-200 rounded-sm w-[940px] h-[620px]">
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
        <TodoForm onAdd={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;
