import { useState } from "react";

const StuffToAdd = (props) => {
  const { setToDo, thingsDone } = props;
  console.log(thingsDone);

  const [thingToAdd, setThingToAdd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setToDo((currantToDoList) => {
      const newArr = currantToDoList.map((obj) => obj.thing);
      const completedThings = thingsDone.map((obj) => obj.thing);
      if (
        !newArr.includes(thingToAdd) &&
        !completedThings.includes(thingToAdd)
      ) {
        const newThing = { thing: thingToAdd, done: false };
        const finalToDo = [...currantToDoList, newThing];
        return finalToDo;
      }

      return currantToDoList;
    });
    setThingToAdd("");
  };

  return (
    <div className="container stuffToAdd">
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
    </div>
  );
};

export default StuffToAdd;
