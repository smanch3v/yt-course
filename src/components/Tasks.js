import Task from "./Task";


export const Tasks = ({tasks}) => {

  return (
    <>
      {tasks.map((task) => (
        <Task key={task} task={task} />
      ))}
    </>
  );
};
