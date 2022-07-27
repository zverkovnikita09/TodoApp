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
        const {task, important, onDelete} = this.props;
        const style = {
            fontWeight: important ? 'bold' : 'normal',
            borderWidth: important ? '3px' : '1px'
        };

        const {done} = this.state
        let className;
        if(done){
            className +=' done';
        }

        return (
            <div className="listItem" style={style}>
                <span className={className}>{task}</span>
                <div className="buttons">
                    <button className="taskButton ch-btn" type="button" onClick={this.isDone} disabled={done}><i className="fa-solid fa-check"></i></button>
                    <button className="taskButton x-btn" type="button" onClick={onDelete}><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>
        )
    }
}