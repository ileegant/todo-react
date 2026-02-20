import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div className="flex flex-2 flex-col space-y-4 p-6">
      <h2 className="text-2xl font-black">TODOS</h2>
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
}
