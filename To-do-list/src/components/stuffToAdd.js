import { useState } from "react";

const StuffToAdd = (props) => {
  const { setToDo } = props;

  // const [thingToAdd, setThingToAdd] = useState("");

  return (
    <form>
      <label htmlFor="thingToDo">Add Something To Do Here!</label>
      <input type="text" id="thingToDo"></input>
      <button type="submit">Click to add!</button>
    </form>
  );
};

export default StuffToAdd;
