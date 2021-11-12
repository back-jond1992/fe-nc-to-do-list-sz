//import { useState } from "react";

const StuffToDo = (prop) => {
  const { toDo, setToDo, setThingsDone } = prop;

  if (toDo.length === 0) {
    return (
      <div className="stuffToDo container" id="stuffToDo">
        <ul>
          <p>You have nothing to do?.....Are you sure?</p>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="stuffToDo container" id="stuffToDo">
        <ul>
          {toDo.map((item) => {
            return (
              <li key={item.thing}>
                {item.thing}
                <button
                  className="toDoButton"
                  onClick={() => {
                    setThingsDone((currentDone) => {
                      const newArray = [...currentDone];

                      item.done = true;
                      newArray.push(item);
                      return newArray;
                    });

                    setToDo((currentToDo) => {
                      const newArr = [...currentToDo];
                      const finalArr = newArr.filter(
                        (obj) => obj.done === false
                      );
                      return finalArr;
                    });
                  }}
                >
                  ✅
                </button>
                <button
                  className="toDoButton"
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
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default StuffToDo;
