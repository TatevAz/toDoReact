import Item from "./Item";

const List = ({ tasks, removeTask, toggleTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Item
          key={index}
          removeTask={removeTask}
          toggleTask={toggleTask}
          i={index}
          task={task}
        />
      ))}
    </div>
  );
};

export default List;
