import React from 'react'
import Todo from './Todo'



// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

function TodoList(props) {
  return(
    <div>
      {props.todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  )
}

export default TodoList