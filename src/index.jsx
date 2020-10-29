// imports react
import React from 'react'
import ReactDOM from 'react-dom'
// import js
import App from './App'
import './reset.scss'
import './theme.scss'

// render element to #root
const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)
