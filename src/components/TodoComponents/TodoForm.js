import React from 'react'

function TodoForm(props) {
  return (
    <form name="addTodoForm" onSubmit={props.addTodoHandler}>
      <input
        type="text"
        name="task"
        value={props.task}
        placeholder="...todo"
        onChange={props.changeHandler}
      />
      <button onClick={props.addTodoHandler}>Add Todo</button>
      <button onClick={props.deleteTodoHandler}>Clear Completed</button>
    </form>
  )
}

export default TodoForm
