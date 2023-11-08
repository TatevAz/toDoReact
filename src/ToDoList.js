import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Filter from "./components/Filter";

class ToDoListRoot extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  addTask = (newTaskName) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title: newTaskName,
          checked: false,
        },
      ],
    });
  };

  removeTask = (index) => {
    this.setState((prevTask) => {
      const tasks = [...prevTask.tasks];
      tasks.splice(index, 1);
      return { tasks };
    });
  };

  onItemClick = (index) => {
    this.setState({
      tasks: this.state.tasks.map((el, i) => {
        if (i === index) {
          return {
            ...el,
            checked: !el.checked,
          };
        } else {
          return el;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <Header add={this.addTask} />
        <List
          toggleTask={this.onItemClick}
          tasks={this.state.tasks}
          removeTask={this.removeTask}
        />
        <Filter />
      </div>
    );
  }
}

export default ToDoListRoot;
