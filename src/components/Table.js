import React, {Component} from 'react'

class Table extends Component{
render(){
    return(
        <div className = "container">
            <table>
                    <thead>
                        <tr>
                            <th scope="col">Todos</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            {
               this.props.todos? this.props.todos.map((todo,index) =>
                (
                   
                    <tr key = {index}>
                        <td style={{
                        textDecoration: todo.completed ? "line-through" : "none"
                        }}>{todo.text}</td>
                        <td><span>{todo.completed === true ? "(completed)" : ""}</span></td>
                        <td><span title = "Delete this todo" className = "fas fa-minus-circle" onClick = {()=>this.props.deleteTodo(index)}></span></td>
                        <td><span title = "Mark as Completed" className = "fas fa-check-circle" onClick = {()=>this.props.checkTodo(index)}></span></td>
                    </tr>
                    
                )
            ):(
                <div className = "alert alert-danger">
                    <h1>No todos here.</h1>
                </div>
               )
            }
            </tbody>
            </table>
        </div>
    )
}
}

export default Table