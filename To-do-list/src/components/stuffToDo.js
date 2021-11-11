import { useState } from "react";

const StuffToDo = (prop) => {
  const { toDo } = prop;
  return (
    <ul>
      {toDo.map((item) => {
        return <li key={item.thing}>{item.thing}</li>;
      })}
    </ul>
  );
};

export default StuffToDo;
