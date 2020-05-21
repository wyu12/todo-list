import React from 'react'
import ListItem from './ListItem.js'
import './App.css'
import './index.css'
import todosData from "./TodoListData.js" //obviously later on this will come from a database/API call instead of from a local file

class App extends React.Component{
  
  constructor() {
    super()
    this.state = {
      todos : todosData //we are giving it the todosData (raw data) as state, and it will process it in Render() to make the components
    }
    this.handleChange = this.handleChange.bind(this)
  }

   handleChange(id) {

    this.setState(prevState => {

      const updatedTodos =  prevState.todos.map(todo => {
          //given a data Item, modify it iff id == id
          if(todo.id === id){
              return{
                ...todo, //give me all the properties of this todo
                completed: !todo.completed //but i will manually edit this property 
              } //returns a new object without modifying the previous todo
          }
          return todo
        }
      )
      return {
        todos: updatedTodos //this is the new object that state will have now
      }

    })

   }


  render() { 
  //for all todo items: since they are already in an array, just create a component for each of them
    const todoItems = this.state.todos.map(
      item =>  <ListItem key = {item.id} item = {item} handleChange = {this.handleChange} />
    )
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
