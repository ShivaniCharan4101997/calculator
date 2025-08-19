import React, { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggleBtn";

const App = () => {
  const [theme, setTheme] = useState("theme-1");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    document.body.classList.remove("theme-2", "theme-3");
    if (theme == "theme-2") {
      document.body.classList.add("theme-2");
    } else if (theme == "theme-3") {
      document.body.classList.add("theme-3");
    } else {
      document.body.classList.add(theme);
    }
  }, [theme]);

  function handleNumber(num) {
    setInputValue(inputValue + num);
  }

  function calculate() {
    setInputValue(eval(inputValue));
  }

  function handleReset() {
    setInputValue("");
  }

  function handleDelete() {
    setInputValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  }

  return (
    <div className={`${theme}  min-h-screen w-full bg-[var(--color-bg-main)]`}>
      <main className="w-[80%] lg:w-[40%] mx-auto pt-[4rem] space-y-4">
        <div className="flex justify-between items-center px-2">
          <h1 className="text-[var(--text-input-color)] font-bold text-2xl">
            calc
          </h1>
          {/* toggle theme btn */}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="rounded-lg w-full p-8 
          text-4xl font-bold
          bg-[var(--color-bg-screen)] text-[var(--text-input-color)]"
        />
        {/* calculator body */}
        <div className="rounded-lg w-full p-8 bg-[var(--color-bg-toggle)] text-[var(--color-text-light)]">
          <div className="grid grid-cols-4 gap-6">
            {/* Row 1 */}
            <button onClick={() => handleNumber("7")} className="btn">
              7
            </button>
            <button className="btn" onClick={() => handleNumber("8")}>
              8
            </button>
            <button className="btn" onClick={() => handleNumber("9")}>
              9
            </button>
            <button onClick={handleDelete} className="btn-primary">
              del
            </button>

            {/* Row 2 */}
            <button className="btn" onClick={() => handleNumber("4")}>
              4
            </button>
            <button className="btn" onClick={() => handleNumber("5")}>
              5
            </button>
            <button className="btn" onClick={() => handleNumber("6")}>
              6
            </button>
            <button onClick={() => handleNumber("+")} className="btn">
              +
            </button>

            {/* Row 3 */}
            <button className="btn" onClick={() => handleNumber("1")}>
              1
            </button>
            <button className="btn" onClick={() => handleNumber("2")}>
              2
            </button>
            <button className="btn" onClick={() => handleNumber("3")}>
              3
            </button>
            <button onClick={() => handleNumber("-")} className="btn">
              -
            </button>
            {/* Row 4 */}
            <button className="btn" onClick={() => handleNumber(".")}>
              .
            </button>
            <button className="btn" onClick={() => handleNumber("0")}>
              0
            </button>
            <button className="btn" onClick={() => handleNumber("/")}>
              /
            </button>
            <button className="btn" onClick={() => handleNumber("*")}>
              x
            </button>

            {/* Row 5 */}
            <button onClick={handleReset} className="col-span-2 btn-primary">
              reset
            </button>
            <button
              className="btn-accent col-span-2"
              onClick={() => calculate()}
            >
              =
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
