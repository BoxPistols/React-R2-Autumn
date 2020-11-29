import React from 'react'
import './styles.sass'
import Basic from './Basic'
import Article from './components/Article'
import HookBasic from './hooks/basic'

export default function App() {


  return (
    <div className="App">
      <h1 className="tx-ml"> Hello CodeSandbox</h1>
      <Basic/>
      <Article title="Hi"/>
      <HookBasic/>
    </div>
  )
}
