interface TodoHeaderProps {
  todosCount: number;
  completedCount: number;
}

export default function TodoHeader({
  todosCount,
  completedCount,
}: TodoHeaderProps) {
  return (
    <div className="flex justify-between text-sm">
      <h2 className="text-2xl font-black">TODOS</h2>
      <h4>
        {completedCount}/{todosCount} Completed
      </h4>
    </div>
  );
}
