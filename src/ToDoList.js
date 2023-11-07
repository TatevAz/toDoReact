import React, { Component } from "react";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  onInputchange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  addTask = () => {
    if (this.state.newTask !== "") {
      this.setState((prevTask) => ({
        tasks: [...prevTask.tasks, this.state.newTask],
        newTask: "",
      }));
    }
  };

  removeTask = (index) => {
    this.setState((prevTask) => {
      const tasks = [...prevTask.tasks];
      tasks.splice(index, 1);
      return { tasks };
    });
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="Add something important!"
          value={this.state.newTask}
          onChange={this.onInputchange}
        />
        <button onClick={this.addTask}>Add</button>
        <div>
          {this.state.tasks.map((task, index) => (
            <div key={index}>
              {task}
              <button onClick={() => this.removeTask()}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ToDoList;
