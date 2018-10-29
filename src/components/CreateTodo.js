import React, {Component} from 'react';

class CreateTodo extends Component{

    constructor(){
        super()
        this.state = {
            todoText:''
        }

        this.onChangeTodoTextHandler = this.onChangeTodoTextHandler.bind(this)
    }

    onChangeTodoTextHandler(event){
        this.setState({
            todoText: event.target.value
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
                        value = {this.state.todoText}
                        onChange = {this.onChangeTodoTextHandler}
                        />
                    <button 
                    type = "button" 
                    className = "btn btn-danger"
                    onClick = {()=>{this.setState({todoText:''})}}
                    >Cancel</button>
                    <button 
                    type = "button" 
                    className = "btn btn-success" 
                    style = {{margin:"25px"}}
                    onClick = {()=>{
                        this.props.getTodosHandler(this.state.todoText);
                        this.setState({todoText:''})
                        }
                    }
                    >Add</button>
                </div>
            </div>
        )
    }
}

export default CreateTodo