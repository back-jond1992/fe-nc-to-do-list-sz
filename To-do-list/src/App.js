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

  const completedStuff = [];

  const [toDo, setToDo] = useState(stuff);

  const [thingsDone, setThingsDone] = useState(completedStuff);

  return (
    <div className="App">
      <Header />
      <StuffToAdd setToDo={setToDo} />
      <StuffToDo toDo={toDo} setToDo={setToDo} setThingsDone={setThingsDone} />
      <MissionCompleted thingsDone={thingsDone} />
    </div>
  );
}

export default App;
