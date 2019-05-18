import React from 'react'

function TodoForm(props) {
  return (
    <form name="addTodoForm" onSubmit={props.addTodoHandler}>
      <input
        type="text"
        name="task"
        placeholder="...todo"
        onChange={props.changeHandler}
        value={props.task}
      />
      <button onClick={props.addTodoHandler}>Add Todo</button>
      <button onClick={props.deleteTodoHandler}>Clear Completed</button>
    </form>
  )
}

export default TodoForm

/* 

function StudentForm(props) {
  return(
    <form name="studentAddForm" onSubmit={props.addStudentHandler}>
      <input
        type="text"
        name="name"
        value={props.name}
        placeholder="name"
        onChange={props.changeHandler}
      />
      <input
        type="text"
        name="identity"
        value={props.identity}
        placeholder="identity"
        onChange={props.changeHandler}
      />
      <input
        type="text"
        name="img"
        value={props.img}
        placeholder="img"
        onChange={props.changeHandler}
      />
      <input
        type="text"
        name="age"
        value={props.age}
        placeholder="age"
        onChange={props.changeHandler}
      />
      <input
        type="text"
        name="bestFriend"
        value={props.bestFriend}
        placeholder="best friend"
        onChange={props.changeHandler}
      />
      <button onClick={props.addStudentHandler}>Add Student</button>
    </form>
  )
}

export default StudentForm

*/