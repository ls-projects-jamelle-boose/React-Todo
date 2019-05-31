import React from 'react'
import Todo from './Todo'

function TodoList(props) {
  return(
    <div className="Todo-Item">
      {props.todos.map(todo => (
        <Todo todo={todo} toggleTodo={props.toggleTodo}/>
      ))}
    </div>
  )
}

export default TodoList
