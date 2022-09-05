import React from "react";
import List from "../List/List";
import Title from "../Title/Title";
import AddForm from "../AddForm/AddForm";
import Counter from "../Counter/Counter";
import './App.css'

export default class App extends React.Component{
  state ={
    todos: []
  }

  ids = 0;

  addTask = (text)=>{
    const newTask = {
      task: text, 
      id: this.ids++,
      done: false
    };
    this.setState(({todos})=>{
      const todosUpd = [...todos, newTask]
      localStorage.setItem('todos',JSON.stringify(todosUpd))
      return{
        todos: todosUpd
      }
    })
  }

  deleteTask = (id)=>{
    this.setState(({todos})=>{
      const idx = todos.findIndex(el=>el.id === id);
      const todosUpd = [...todos.slice(0,idx), ...todos.slice(idx+1)]
      this.ids--;
      localStorage.setItem('todos',JSON.stringify(todosUpd))
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
      localStorage.setItem('todos',JSON.stringify(todosUpd))
      return{
        todos: todosUpd
      } 
    })
  };


  componentDidMount(){
    this.setState(({todos})=>{
      const todosUpd = JSON.parse(localStorage.getItem('todos'));
      return {
        todos: todosUpd || todos
      }
    })
  }

  render(){
    const {todos}=this.state;
    const doneCount = todos.filter(el=>el.done).length;
    const leftCount = todos.length - doneCount;

    const filtered = todos.length>0 ? [...todos.filter((item)=> !item.done), ...todos.filter((item)=>item.done)] : [];

    return (
      <div className="app">
        <Title/>
        <Counter left={leftCount} done={doneCount}/>
        <AddForm OnAdd={this.addTask}/>
        <List 
          todos = {filtered} 
          onDelete={this.deleteTask}
          onDone={this.onDone}
        />
      </div>
    )
  }
}
