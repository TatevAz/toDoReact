import React from "react";

class Header extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      newTaskName: "",
    };
  }

  onInputchange = (e) => {
    this.setState({
      newTaskName: e.target.value,
    });
  };

  onAddButtonClick = () => {
    this.props.add(this.state.newTaskName);
    this.setState({
      newTaskName: "",
    });
  };

  render() {
    return (
      <>
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="Add something important!"
          value={this.state.newTaskName}
          onChange={this.onInputchange}
        />
        <button onClick={this.onAddButtonClick}>Add</button>
      </>
    );
  }
}

export default Header;
