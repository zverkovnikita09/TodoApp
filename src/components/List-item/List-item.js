import React from "react";
import './List-item.css'


export default class ListItem extends React.Component{
    state = {
        done: false
    }
    isDone = () =>{
        this.setState({
            done: true
        });
    }
    render(){
        const {task, onDelete} = this.props;

        const {done} = this.state

        let className;
        if(done){
            className +=' done';
        }

        return (
            <div className="listItem">
                <span className={className} onClick={this.isDone}>{task}</span>
                <button className={`check-btn btns ${className}`} type="button" onClick={this.isDone}><i className="fa-solid fa-check"></i></button>
                <button className="erase-btn btns" type="button" onClick={onDelete}><i class="fa-solid fa-eraser"></i></button>
            </div>
        )
    }
}