import React, { Component } from 'react';

import CreateTodo from './components/CreateTodo'
import Table from './components/Table'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todosList:[]
    }
    super()

    this.getTodosHandler = this.getTodosHandler.bind(this);
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
    this.checkTodoHandler = this.checkTodoHandler.bind(this);
  }

  getTodosHandler(newTodoText, completed){
  let newTodo = {text:newTodoText,
                completed:completed}
   this.setState({
     todosList:[...this.state.todosList, newTodo]
   })
  }

  deleteTodoHandler(idToDelete){
    let newArray = [...this.state.todosList]
    newArray.splice(idToDelete,1);
    this.setState({
      todosList:newArray
    })
    // this.setState({
    //   todosList:[]
    // })
  }

  checkTodoHandler(idToCheck){
    let newArray = [...this.state.todosList]
    newArray[idToCheck]['completed'] = true;
    this.setState({
      todosList:newArray
    })
  }

  render() {
    return (
     <div className = "App">
     <div className = "container" style = {{marginTop:"80px"}}>
        <div className = "row">
          <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo getTodosHandler= {this.getTodosHandler}/>
            </div>
            <Table todos = {this.state.todosList} deleteTodo = {this.deleteTodoHandler} checkTodo = {this.checkTodoHandler}/>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
