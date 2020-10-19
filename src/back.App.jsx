import React from 'react'
import './styles.scss'

// create object オブジェクト配列の作成
const todos = [
  { id: 0, title: 'taskA' },
  { id: 1, title: 'taskB' },
]

// function Props Propsの作成とMap関数で値の取得
function TodoList(props) {
  // const for map get obj loop
  const todos = props.todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>
  })
  // Mapの親
  return <ul>{todos}</ul>
}
// class extends
class Todo extends React.Component {
  // constructor for state
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
        {/* Component View */}
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
