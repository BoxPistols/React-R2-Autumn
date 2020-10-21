import React from 'react'
import './styles.sass'

// create object オブジェクト配列の作成
const todos = [
  { id: 1, name: 'nameA', 'done': false },
  { id: 2, name: 'nameB', 'done': false },
  { id: 3, name: 'nameB', 'done': true },
]

// function Props Propsの作成とMap関数で値の取得
// const for map get obj loop
function TodoList(props) {
  // child
  const todos = props.todos.map((todo) => {
    return <li key={todo.id}>{todo.name} / {todo.done}</li>
  })
  // Parent
  return <ul>{todos}</ul>
}
// class extends
class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todos,
    }
  }
  render() {
    return <TodoList todos={this.state.todos} />
  }
}
// render <Todo state
export default function App() {
  return (
    <div className="App fz20">
      <h1 className="tx-ml"> Hello CodeSandbox</h1>
      <Todo />
    </div>
  )
}
