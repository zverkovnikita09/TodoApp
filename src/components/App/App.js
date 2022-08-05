import React from "react";
import List from "../List/List";
import Title from "../Title/Title";
import AddForm from "../AddForm/AddForm";
import Counter from "../Counter/Counter";
import './App.css'

export default class App extends React.Component{
  state ={
    todos: [
      /* {task:'To get up', id: 1, done: false},
      {task:'To brush teeth', id: 2, done: false},
      {task:'To have breakfast', id: 3, done: false} */
    ]
  }

  ids = 5;

  addTask = (text)=>{
    const newTask = {
      task: text, 
      id: this.ids++,
      done: false
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
      const idx = todos.findIndex(el=>el.id === id);
      const todosUpd = [...todos.slice(0,idx), ...todos.slice(idx+1)]
      return{
        todos: todosUpd
      } 
    })
  }

  onDone = (id)=>{
    this.setState(({todos})=>{
      const idx = todos.findIndex(el=>el.id === id)
      const itemUpd = {...todos[idx], done: true};
      const todosUpd = [...todos.slice(0,idx), itemUpd, ...todos.slice(idx+1)]

      return{
        todos: todosUpd
      } 
    })
  };

  render(){
    const {todos}=this.state;
    const doneCount = todos.filter(el=>el.done).length;
    const leftCount = todos.length - doneCount;

    return (
      <div className="app">
        <Title/>
        <Counter left={leftCount} done={doneCount}/>
        <AddForm OnAdd={this.addTask}/>
        <List 
          todos = {todos} 
          onDelete={this.deleteTask}
          onDone={this.onDone}
        />
      </div>
    )
  }
}
