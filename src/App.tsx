import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-white overflow-hidden">
      <div className="flex justify-around bg-gray-100 border-2 border-gray-200 rounded-sm w-[940px] h-[620px]">
        <div className="flex flex-2 flex-col space-y-4 p-6">
          <h2 className="text-2xl font-black">TODOS</h2>
          <ul>
            <li className="flex justify-between items-center border-b border-gray-300 p-4">
              <button>SOME TEXT</button>
              <button className="text-xs font-black hover:text-red-500 cursor-pointer">
                DELETE
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col space-y-4 items-center text-gray-600 p-6 bg-gray-200">
          <h2 className="text-2xl font-black">CREATE TODO</h2>
          <textarea
            className="w-full max-w-lg min-h-[120px] p-2 border border-gray-400 rounded-sm text-slate-800 resize-none"
            placeholder="Write here.."
          />
          <button className="border-2 py-1 px-4 font-bold border-gray-600 cursor-pointer hover:bg-gray-600 hover:text-gray-200">
            ADD TODO
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
