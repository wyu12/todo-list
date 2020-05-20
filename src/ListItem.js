import React from 'react'

function ListItem(props){
//props: text and Completed (bool)

    return (
        <div className = "todo-item">
        <input 
        type="checkbox" 
        checked = {props.item.completed}
        onChange = {() => props.handleChange(props.item.id)} />
        <p>{props.item.text}</p>
        </div>
    );


}
export default ListItem

