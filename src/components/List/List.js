import React from 'react';
import ListItem from '../List-item/List-item';
import './List.css'


export default class List extends React.Component{
  render(){
    const {todos, onDelete, onDone} = this.props;
    if(todos.length === 0){
      return <h2 className='call-to-act'>Please add a task</h2>
    }
    else{
      const elements = todos.map((elem)=>{

        const {id, ...elemProps} = elem;
        return (
        <li key={id}>
          <ListItem 
            {...elemProps} 
            onDelete={()=>onDelete(id)}
            onDone={()=>onDone(id)}
          />
        </li>)
      })
    
        return (
          <ul className='todoList'>
            {elements}
          </ul>
        )
    }
  }
}
