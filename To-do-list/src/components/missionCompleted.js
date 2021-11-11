const MissionCompleted = (props) => {
  const { thingsDone } = props;
  return (
    <div>
      <h2>Completed Stuff</h2>
      <ul>
        {thingsDone.map((item) => {
          return <li key={item.thing}>{item.thing}</li>;
        })}
      </ul>
    </div>
  );
};
export default MissionCompleted;
