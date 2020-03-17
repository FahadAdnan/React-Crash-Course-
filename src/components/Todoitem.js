//rce + tab ,quickly generates components for react developers from e67 react extension for vs code

import React, { Component } from 'react'
import PropTypes from 'prop-types';


// {{backgroundColor: '#f3f3f2'}} is for javascript,just like html attributes but camelcase
 export class Todoitem extends Component {
    
    getStyle = () => {
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc dotted',
            fontSize: '15px',
            textDecoration:this.props.todo.completed ?
            'line-through' : 'none'
        }
    }
   
    render() {
        const {id, title} = this.props.todo; // destructuring 
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)}></input>
                    {title} 
                    <button onClick={this.props.delTodo.bind(this, id)} 
                            style={btnStyle}> </button>
                    </p>
            </div>
        )
    }

}

//Proptypes 
Todoitem.propTypes = {
    todo:PropTypes.object.isRequired, // this is sent in a todo object by Todo.js 
    markComplete:PropTypes.func.isRequired, 
    delTodo:PropTypes.func.isRequired 
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '8px 8px',
    borderRadius: '50%',
    float:'right',
}


export default Todoitem
