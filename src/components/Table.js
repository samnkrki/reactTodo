import React, {Component} from 'react'

class Table extends Component{
render(){
    return(
        <div className = "container">
            {
               this.props.todos? this.props.todos.map((todo,index) =>
                (<table>
                    <thead>
                        <tr>
                            <th scope="col">Todos</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr key = {index}>
                        <td style={{
                        textDecoration: todo.completed ? "line-through" : "none"
                        }}>{todo.text}{todo.completed === true ? "(completed)" : ""}</td>
                        <td><span className = "fas fa-minus-circle" onClick = {()=>this.props.deleteTodo(index)}></span></td>
                        <td><span className = "fas fa-check-circle" onClick = {()=>this.props.checkTodo(index)}></span></td>
                    </tr>
                    </tbody>
                </table>
                )
            ):(
                <div className = "alert alert-danger">
                    <h1>No todos here.</h1>
                </div>
               )
            }
        </div>
    )
}
}

export default Table