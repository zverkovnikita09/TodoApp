import React from "react";
import List from "../List/List";
import Title from "../Title/Title";
import Search from "../Search-panel/Search-panel";
import './App.css'

export default class App extends React.Component{
  state ={
    todos: [
      {task:'To get up', important: false, id: 1},
      {task:'To brush teeth', important: false, id: 2},
      {task:'To have breakfast', important: true, id: 3}
    ]
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
        <Search/>
        <List todos = {todos} onDelete={this.deleteTask}/>
      </div>
    )
  }
}
