import React from 'react'
import './styles.css'

const todos = [
  { id: 0, title: 'taskA' },
  { id: 1, title: 'taskB' },
]

function TodoList(props) {
  const todos = props.todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>
  })
  return <ul>{todos}</ul>
}

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todos,
    }
  }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default function App() {
  return (
    <div className="App">
      <Todo />
      <h1> Hello CodeSandbox</h1>
    </div>
  )
}
