export default function TodoItem() {
  return (
    <li className="flex justify-between items-center border-b border-gray-300 p-4">
      <button>SOME TEXT</button>
      <button className="text-xs font-black hover:text-red-500 cursor-pointer">
        DELETE
      </button>
    </li>
  );
}
