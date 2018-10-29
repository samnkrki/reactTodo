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
  }
  getTodosHandler(newTodoText){
    // console.log(newTodoText)
   this.setState({
     todosList:[...this.state.todosList, newTodoText]
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
            <Table todos = {this.state.todosList}/>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
