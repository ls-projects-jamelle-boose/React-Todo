import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


//todos array
const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


const defaultState = {
  todos: todos
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props)
    this.state = defaultState
  }


// <TodoList /> receives your Todos array 

// and iterates over the list generating a new <Todo /> for each element in the array.

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={todos}/>
        <TodoForm />
      </div>
    )
  }
}

export default App;

/* 

        <div className="class-list">
          {this.state.hogwartsStudents.map(student => (
            <Student student={student} />
          ))

*/