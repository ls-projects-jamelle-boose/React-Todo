import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


//todos array
const todos = []


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

  deleteTodoHandler = event => {
    event.preventDefault()
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  toggleTodo = todoId => {
    console.log(`todoId: ${todoId}`)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
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
          deleteTodoHandler={this.deleteTodoHandler}
          changeHandler={this.changeHandler}
          task={this.state.task}
        />
      </div>
    )
  }
}

export default App;
