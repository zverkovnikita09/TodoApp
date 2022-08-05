import React from "react";
import './AddForm.css'

class AddForm extends React.Component{

    state = {
        task: ''
    };

    onInputChange = (e)=>{
        this.setState({
            task: e.target.value
        })
    }

    submit = (e)=>{
        e.preventDefault();
        this.props.OnAdd(this.state.task)
        this.setState({
            task: ''
        })
    }
    render(){
        return (
            <form className="addForm" onSubmit={this.submit}>
                <input className="addInput" onChange={this.onInputChange} placeholder="Type your task..." value={this.state.task}/>
                <button className="addBtn"><i class="fa-solid fa-pen"></i></button>
            </form>
        )
    }
}

export default AddForm;