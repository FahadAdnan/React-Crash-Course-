import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    valueChanged = (e) => this.setState({
         [e.target.name]:e.target.value}); 
         //instead of using title:e.target.value we can 
         // replace title with [e.target.name] which has a value of title
    //component level state, todo was app level state

    onSubmit = (e) => {
        e.preventDefault(); //prevent default onSubmit function
        this.props.addToDo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit ={this.onSubmit}
                  style={{display:'flex', padding: '3px'}}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex: '10', padding:'8px'}}
                    placeholder="Add your todo..."
                    value = {this.state.title}
                    onChange = {this.valueChanged}
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}


AddTodo.propTypes = {
    addToDo:PropTypes.func.isRequired
}

export default AddTodo
