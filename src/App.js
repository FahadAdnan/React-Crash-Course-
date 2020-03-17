import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Header from './components/layout/header';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid/v4';


var idcount = 3;

class App extends Component {
  state = {
    todos: []
  }

  //Toggle Complete 
  markComplete = (id) =>{
    this.setState({todo: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
    console.log(id);
}
//DelTodo 
delTodo = (id) =>{
  this.setState({ todos: [...this.state.todos.filter(todo => 
    todo.id !== id)]});
}
//AddTodo
addTodo = (title) => {
  const newTodo = {
    id: uuid(),
    title: title,
    completed:false 
  }
  this.setState({ todos:[... this.state.todos, newTodo]})
}

  render () { 
    console.log(this.state.todos);
    return (
  <Router>
    <div className="App">
      <div className = "container">
        <Header/>

        <Route exact path="/" render ={props => (
          <React.Fragment>
            <AddTodo addToDo={this.addTodo} />
            <Todo todos={this.state.todos} markComplete = {this.markComplete}
              delTodo = {this.delTodo}/>
          </React.Fragment>
          )} />

        <Route path="/About" component ={About} />

      </div>
    </div>
 </Router>
  );
}
}
export default App;
