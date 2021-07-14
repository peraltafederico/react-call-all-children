import "./styles.css";
import Dispatcher from "./Dispatcher";
import { useRef } from "react";

// I hope this is not an anti pattern

export default function App() {
  const { current: queue } = useRef([]);

  const handleDispatchAll = () => {
    queue.forEach((q) => q.dispatch());
  };

  return (
    <div className="App">
      <button onClick={handleDispatchAll}>Dispatch All</button>
      <Dispatcher queue={queue} id="1" />
      <Dispatcher queue={queue} id="2" />
      <Dispatcher queue={queue} id="3" />
      <Dispatcher queue={queue} id="4" />
      <Dispatcher queue={queue} id="5" />
      <Dispatcher queue={queue} id="6" />
    </div>
  );
}
