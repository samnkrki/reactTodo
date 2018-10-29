import React, {Component} from 'react'

class Table extends Component{
render(){
    if (!this.props.todos) {
        return (
            <div className="container">
                No todos
            </div>
        )
    }
    return(
        <div className = "container">
            {
                this.props.todos.map((todo,index) =>{
                    return(
                        <ul key = {index}>
                            <li>{todo}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
}

export default Table