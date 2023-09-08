import { useEffect, useState } from "react";

function App() {

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector("html").classList.add("transition");
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.remove("transition");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-900">

      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">        
        <div className="flex flex-col items-center pb-10">
          <img className="w-20 h-20 mb-3 animate-spin" src="vite.svg" alt="image" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">React | TailwindCSS | Theme</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">...</span>

          <div className="flex mt-4 space-x-3 md:mt-6">
            <button
              className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-green-800 dark:text-white dark:hover:bg-green-700"
              onClick={handleChangeTheme}
            >
              Change here
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
