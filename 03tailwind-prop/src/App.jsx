import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        thilwind test
      </h1>
      <Card channel="chaiaurcode" />
      <Card channel="ayesha" />
    </>
  );
}

export default App;
