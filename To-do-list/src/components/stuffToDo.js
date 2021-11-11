//import { useState } from "react";

const StuffToDo = (prop) => {
  const { toDo } = prop;
  return (
    <div>
      <ul>
        {toDo.map((item) => {
          return <li key={item.thing}>{item.thing}</li>;
        })}
      </ul>
    </div>
  );
};

export default StuffToDo;
