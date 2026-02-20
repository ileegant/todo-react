import { useState } from "react";
import "./App.css";
import type { Todo } from "./types";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initial_todos } from "./lib/constants";

function App() {
  const [todos, setTodos] = useState<Todo[]>(initial_todos);

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-white overflow-hidden">
      <div className="flex justify-around bg-gray-100 border-2 border-gray-200 rounded-sm w-[940px] h-[620px]">
        <TodoList todos={todos} />
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
