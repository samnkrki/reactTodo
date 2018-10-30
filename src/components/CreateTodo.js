import React, {Component} from 'react';

class CreateTodo extends Component{

    constructor(){
        super()
        this.state = {
            text:'',
            completed:false
        }

        this.onChangeTodoTextHandler = this.onChangeTodoTextHandler.bind(this)
    }

    onChangeTodoTextHandler(event){
        this.setState({
            text: event.target.value,
            completed:false
        })
    }

    render(){
        return(
            <div className="form-group row">
                <div className="col-sm-10">
                    <input 
                        type = "text" 
                        placeholder = "Add todo here" 
                        className = "form-control" 
                        value = {this.state.text}
                        onChange = {this.onChangeTodoTextHandler}
                        />
                    <button 
                    type = "button" 
                    className = "btn btn-danger"
                    onClick = {()=>{this.setState({text:''})}}
                    >Cancel</button>
                    <button 
                    type = "button" 
                    className = "btn btn-success" 
                    style = {{margin:"25px"}}
                    onClick = {()=>{
                        this.props.getTodosHandler(this.state.text,this.state.completed);
                        this.setState({text:''})
                        }
                    }
                    >Add</button>
                </div>
            </div>
        )
    }
}

export default CreateTodo