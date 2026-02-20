import { useState } from "react";

interface TodoFormProps {
  onAdd: (value: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-1 flex-col space-y-4 items-center text-gray-600 p-6 bg-gray-200">
      <h2 className="text-2xl font-black">CREATE TODO</h2>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full max-w-lg min-h-[120px] p-2 border border-gray-400 rounded-sm text-slate-800 resize-none"
        placeholder="Write here.."
      />
      <button
        className="w-full border-2 py-1 font-bold border-gray-600 cursor-pointer hover:bg-gray-600 hover:text-gray-200"
        onClick={() => {
          onAdd(value);
          setValue("");
        }}
      >
        ADD TODO
      </button>
    </div>
  );
}
