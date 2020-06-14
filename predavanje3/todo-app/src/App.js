import React from "react";
import Todos from "./Todos";

class App extends React.Component {
  state = {
    inputValue: "",
    todos: [
      { id: 1, name: "uradi domaci" },
      { id: 2, name: "uradi nesto" },
    ],
  };
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: this.state.todos.length + 1,
      name: this.state.inputValue,
    };
    let todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos });
  };
  render() {
    return (
      <div className="container">
        <h1 className="center">Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.inputValue}
          ></input>
        </form>
        <Todos todoItems={this.state.todos}></Todos>
      </div>
    );
  }
}

export default App;
