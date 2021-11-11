import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import StuffToDo from "./components/stuffToDo";
import StuffToAdd from "./components/stuffToAdd";
import MissionCompleted from "./components/missionCompleted";

function App() {
  const stuff = [
    { thing: "Make Dinner", done: false },
    { thing: "Watch Netflixs", done: false },
  ];

  const [toDo, setToDo] = useState(stuff);
  return (
    <div className="App">
      <Header />
      <StuffToAdd setToDo={setToDo} />
      <StuffToDo toDo={toDo} setToDo={setToDo} />
      <MissionCompleted setToDo={setToDo} />
    </div>
  );
}

export default App;
