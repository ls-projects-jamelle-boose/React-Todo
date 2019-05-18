
import React from 'react'

function Todo(props) {
  return(
    <div className="Todo-Item">
      <p>{props.todo.task}</p>
    </div>

  )
}

export default Todo
