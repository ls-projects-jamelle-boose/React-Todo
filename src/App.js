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
  todos: todos,
  task: "",
  completed: false
}

class App extends React.Component {
  constructor() {
    super()
    this.state = defaultState
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
    
  }

  addTodoHandler = event => {
    event.preventDefault()
    let newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: ""
    })
  }

  toggleTodo = todoId => {
    console.log(`todoId: ${todoId}`);
  }


  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />
        <TodoForm 
          addTodoHandler={this.addTodoHandler}
          changeHandler={this.changeHandler}
          task={this.state.task}
        />
      </div>
    )
  }
}

export default App;
