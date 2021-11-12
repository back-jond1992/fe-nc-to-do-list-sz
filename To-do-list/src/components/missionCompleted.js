const MissionCompleted = (props) => {
  const { thingsDone, setThingsDone, setToDo } = props;

  if (thingsDone.length === 0) {
    return (
      <div className="container missionCompleted">
        <h2>Completed Stuff</h2>
        <p>You haven't completed anything! 😠 </p>
      </div>
    );
  } else {
    return (
      <div className="container missionCompleted">
        <h2>Completed Stuff</h2>
        <ul>
          {thingsDone.map((item) => {
            return (
              <li key={item.thing}>
                {item.thing}
                <button
                  className="completedButton"
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
  }
};
export default MissionCompleted;
