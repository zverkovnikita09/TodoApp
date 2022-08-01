import React from "react";
import List from "../List/List";
import Title from "../Title/Title";
import AddForm from "../AddForm/AddForm";
import './App.css'

export default class App extends React.Component{
  state ={
    todos: [
      {task:'To get up', id: 1},
      {task:'To brush teeth', id: 2},
      {task:'To have breakfast', id: 3}
    ]
  }

  ids = 5;

  addTask = (text)=>{
    const newTask = {
      task: text, 
      id: this.ids++
    };

    this.setState(({todos})=>{
      const todosUpd = [...todos, newTask]

      return{
        todos: todosUpd
      }
    })
  }

  deleteTask = (id)=>{
    this.setState(({todos})=>{
      const element = todos.findIndex(el=>el.id === id);
      const todosUpd = [...todos.slice(0,element), ...todos.slice(element+1)]
      return{
        todos: todosUpd
      } 
    })
  }

  render(){
    const {todos}=this.state;
    return (
      <div className="app">
        <Title/>
        <AddForm OnAdd={this.addTask}/>
        <List todos = {todos} onDelete={this.deleteTask}/>
      </div>
    )
  }
}
