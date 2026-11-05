import { DeleteIcon, Moon, Plus, Sun } from "lucide-react";
import { useState } from "react";

function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen p-5 transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-gradient-to-t from-blue-600 to-white text-black"
      }`}
    >
      <div className="flex justify-center">
        <div
          className={`w-full max-w-4xl rounded-2xl p-8 shadow-xl ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-gradient-to-b from-blue-600 to-blue-400 text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Todo App</h2>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-lg p-2 transition hover:bg-white/20"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
          <h2>Vipin</h2>

          <div className="mt-8 flex items-center gap-5">
            <div className="relative flex w-full items-center">
              <Plus size={22} className="absolute left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Add new task..."
                className="w-full rounded-2xl border border-gray-300 bg-white p-2 ps-10 text-black shadow-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <button className="flex items-center gap-2 rounded-2xl bg-white px-5 py-2 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50">
              <Plus size={18} />
              Add
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {["All", "Active", "Completed"].map((item, index) => (
              <button
                key={item}
                className={`flex items-center gap-2 rounded-2xl px-5 py-1 font-semibold transition ${
                  index === 0
                    ? "bg-blue-500 text-white"
                    : "bg-white/80 text-black hover:bg-white"
                }`}
              >
                {item}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm text-black">
                  {[3, 2, 1][index]}
                </span>
              </button>
            ))}
          </div>

          <hr className="mt-4 border-0 border-b border-white/40" />

          <div className="mt-8 space-y-4">
            {[
              "Completed project setup",
              "Create Todo App UI",
              "Learn Tailwind CSS",
            ].map((task, index) => (
              <div
                key={index}
                className={`flex items-center justify-between rounded-xl border px-3 py-3 shadow-lg ${
                  darkMode
                    ? "border-slate-600 bg-slate-700"
                    : "border-gray-300 bg-white text-black"
                }`}
              >
                <div className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    defaultChecked={index === 0}
                    className="h-4 w-4 cursor-pointer accent-blue-600"
                  />
                  <p
                    className={`font-semibold ${
                      index === 0 ? "text-gray-400 line-through" : ""
                    }`}
                  >
                    {task}
                  </p>
                </div>

                <button className="rounded-lg p-2 text-red-500 transition hover:bg-red-100">
                  <DeleteIcon size={20} />
                </button>
              </div>
            ))}
          </div>

          <p className="mt-4 rounded-lg px-5 py-2 font-semibold text-yellow-300 shadow-lg">
            <span>2</span> tasks left
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
