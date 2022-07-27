import React from 'react';
import ListItem from '../List-item/List-item';
import './List.css'


export default class List extends React.Component{
  render(){
    const {todos, onDelete} = this.props;
    
    const elements = todos.map((elem)=>{
      return <li key={elem.id}><ListItem {...elem} onDelete={()=>onDelete(elem.id)}/></li>
    })
  
      return (
        <ul className='todoList'>
          {elements}
        </ul>
      )
  }
}
