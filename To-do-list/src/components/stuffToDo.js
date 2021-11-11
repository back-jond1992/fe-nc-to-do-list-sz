//import { useState } from "react";

const StuffToDo = (prop) => {
  const { toDo, setToDo } = prop;
  return (
    <div>
      <ul>
        {toDo.map((item) => {
          return (
            <li key={item.thing}>
              {item.thing}
              <button
                onClick={() => {
                  setToDo((currentToDo) => {
                    const newArr = [...currentToDo];
                    const finalArr = newArr.filter(
                      (obj) => obj.thing !== item.thing
                    );
                    return finalArr;
                  });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StuffToDo;
