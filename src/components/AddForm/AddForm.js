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
        if(this.state.task!==''){
            this.props.OnAdd(this.state.task)
            this.setState({
            task: ''
            })
        }
        return
    }
    render(){
        return (
            <form className="addForm" onSubmit={this.submit}>
                <input className="addInput" onChange={this.onInputChange} autoComplete='off' id='AddForm' placeholder="Type your task..." value={this.state.task}/>
                <button className="addBtn"><i className="fa-solid fa-pen"></i></button>
            </form>
        )
    }
}

export default AddForm;