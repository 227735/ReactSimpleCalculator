import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Błąd");
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;

      if ("0123456789".includes(key)) {
        handleClick(key);
      } else if (["/", "*", "-", "+", "."].includes(key)) {
        handleClick(key);
      } else if (key === "Enter") {
        handleCalculate();
      } else if (key === "Escape") {
        handleClear();
      } else if (key === "Backspace") {
        handleBackspace();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    // Usunięcie nasłuchiwacza po odmontowaniu komponentu
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [input]);

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleClick('/')} className="divide">/</button>
        <button onClick={() => handleClick('*')} className="multiply">*</button>
        <button onClick={() => handleClick('-')} className="action">-</button>

        <button onClick={() => handleClick('7')} className="number">7</button>
        <button onClick={() => handleClick('8')} className="number">8</button>
        <button onClick={() => handleClick('9')} className="number">9</button>
        <button onClick={() => handleClick('+')} className="action">+</button>

        <button onClick={() => handleClick('4')} className="number">4</button>
        <button onClick={() => handleClick('5')} className="number">5</button>
        <button onClick={() => handleClick('6')} className="number">6</button>
        <button onClick={handleCalculate} className="equal">=</button>

        <button onClick={() => handleClick('1')} className="number">1</button>
        <button onClick={() => handleClick('2')} className="number">2</button>
        <button onClick={() => handleClick('3')} className="number">3</button>
        <button onClick={() => handleClick('0')} className="zero">0</button>
      </div>
    </div>
  );
}

export default App;
