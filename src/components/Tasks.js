import Task from "./Task";


export const Tasks = ({tasks, onDelete}) => {

  return (
    <>
      {tasks.map((task) => (
        <Task key={task} task={task} onDelete={onDelete}/>
      ))}
    </>
  );
};
