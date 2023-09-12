import { useState } from "react";
import { Wrap } from "./components/Wrap";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Wrap />
    </div>
  );
}

export default App;
