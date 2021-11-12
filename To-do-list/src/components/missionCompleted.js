const MissionCompleted = (props) => {
  const { thingsDone, setThingsDone, setToDo } = props;
  return (
    <div>
      <h2>Completed Stuff</h2>
      <ul>
        {thingsDone.map((item) => {
          return (
            <li key={item.thing}>
              {item.thing}
              <button
                onClick={() => {
                  setToDo((currentToDo) => {
                    const newCurrentToDo = [...currentToDo];
                    const newObj = { thing: item.thing, done: false };
                    newCurrentToDo.push(newObj);
                    return newCurrentToDo;
                  });
                  setThingsDone((currentStuffDone) => {
                    const newArr = [...currentStuffDone];
                    const finalArr = newArr.filter(
                      (obj) => obj.thing !== item.thing
                    );

                    return finalArr;
                  });
                }}
              >
                Oops! Not yet...
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MissionCompleted;
