import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos : [],
    currentTodo: "",
    green: true
  }

  changeColor= (i) =>{
    this.setState({green:!this.state.green})
  }

  onInputChange = e =>{
    this.setState({currentTodo: e.target.value});
  }

  onClick = ()=>{
    let todosCopy = this.state.todos;
    todosCopy.push(this.state.currentTodo);

    this.setState({todos: todosCopy, currentTodo: ""})
  }

  deleteTodo = i =>{
    let todosCopy = this.state.todos;
    todosCopy.splice(i, 1);

    this.setState({todos: todosCopy})
  }

  render() {
    let points = this.state.todos.map((e,i) =>{
      return(
        <div>
        <li key = {i} >{e}</li>
        <button onClick = {()=>this.deleteTodo(i)}>x</button>
        <button onClick = {this.onClick}>Done</button>
        </div>
      )
    })
    return (
      <div className="App">
        <input placeholder = "Enter todo" value = {this.state.currentTodo} onChange = {this.onInputChange}/>
        <button onClick = {this.onClick}>Add!</button> 
        <br/>
        {<ul>{points}</ul>}
      </div>
    );
  }
}

export default App;
