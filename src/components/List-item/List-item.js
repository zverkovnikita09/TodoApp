import React from "react";
import './List-item.css'


const ListItem =(props)=>{
    const {task, onDelete, onDone, done} = props;

    let className;
    if(done){
        className +=' done';
    }

    return (
        <div className="listItem">
            <span className={className} onClick={onDone}>{task}</span>
            <button className={`check-btn btns ${className}`} type="button" onClick={onDone}><i className="fa-solid fa-check"></i></button>
            <button className="erase-btn btns" type="button" onClick={onDelete}><i className="fa-solid fa-eraser"></i></button>
        </div>
    )
}

export default ListItem;