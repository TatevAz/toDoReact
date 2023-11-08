import React from "react";

const Item = ({ task, toggleTask, i, removeTask }) => (
  <div
    style={{
      textDecoration: task.checked ? "line-through" : "unset",
    }}
  >
    <span onClick={() => toggleTask(i)}>{task.title}</span>
    <button onClick={() => removeTask(i)}>Remove</button>
  </div>
);

export default Item;
