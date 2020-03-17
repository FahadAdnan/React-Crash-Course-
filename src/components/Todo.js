import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todo extends Component {

  render () {
    //  console.log(this.props.todos);
    return this.props.todos.map((todo)=>(
    <TodoItem key={todo.id} todo={todo} markComplete ={this.props.markComplete}
    delTodo={this.props.delTodo}/>
    //<h3> { todo.title }</h3>
    ));
}
}

//Proptypes 
Todo.propTypes = {
    todos:PropTypes.array.isRequired, // this is sent in a todos array by App.js 
    markComplete:PropTypes.func.isRequired, 
    delTodo:PropTypes.func.isRequired 
  }

export default Todo;
