import { useState } from "react";
import "./App.css";

function App() {
  let [counter, Setcounter] = useState(15);

  const addValue = () => {
    if (counter != 20) {
      counter = counter + 1;
      Setcounter(counter);
    }
  };

  // interview question on counter 🚁
  // const addValue = () => {
  //   Setcounter((prevCounter) => prevCounter + 1);
  //   Setcounter((prevCounter) => prevCounter + 1);
  //   Setcounter((prevCounter) => prevCounter + 1);
  //   Setcounter((prevCounter) => prevCounter + 1);
  // };

  const removeValue = () => {
    if (counter != 0) {
      counter = counter - 1;
      Setcounter(counter);
    }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>couner value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
