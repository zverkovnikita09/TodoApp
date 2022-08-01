import React from "react";
import './AddForm.css'

const AddForm = (props)=>{
    return (
        <form className="addForm">
            <input className="addInput" placeholder="Type your task..."/>
            <button type="button" onClick={()=>props.OnAdd('New Task')} className="addBtn"><i class="fa-solid fa-pen"></i></button>
        </form>
    )
}

export default AddForm;