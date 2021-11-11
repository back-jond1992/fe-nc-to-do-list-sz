import { useState } from "react";

const StuffToAdd = (props) => {
  const { setToDo } = props;

  const [thingToAdd, setThingToAdd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setToDo((currantToDoList) => {
      const newArr = currantToDoList.map((obj) => obj.thing);
      if (!newArr.includes(thingToAdd)) {
        const newThing = { thing: thingToAdd, done: false };
        const finalToDo = [...currantToDoList, newThing];
        return finalToDo;
      }

      return currantToDoList;
    });
    setThingToAdd("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="thingToDo">Add Something To Do Here!</label>
      <input
        type="text"
        id="thingToDo"
        value={thingToAdd}
        onChange={(e) => {
          setThingToAdd(e.target.value);
        }}
        required
      ></input>
      <button type="submit">Click to add!</button>
    </form>
  );
};

export default StuffToAdd;
