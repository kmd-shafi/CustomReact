import { useState } from "react";
import "./App.css";

function App() {
  const [color, srtColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-3">
          <button
            onClick={() => srtColor("red")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => srtColor("Green")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => srtColor("Blue")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => srtColor("Olive")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => srtColor("Gray")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => srtColor("Yellow")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => srtColor("Pink")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => srtColor("Purple")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => srtColor("Lavender")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => srtColor("White")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
          <button
            onClick={() => srtColor("black")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
