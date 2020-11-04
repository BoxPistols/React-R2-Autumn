import React from 'react'
import './styles.sass'
// import Basic from './Basic'
// import Human from './Human'
import DropDownMenu from './components/DropDownMenu'
import Article from './components/Article'

export default function App() {
  // function Hello(props) {
  //   return <p>"Mr":{props.name}</p>
  // }
  // function Hello2({ firstName, lastName }) {
  //   return (
  //     <p>
  //       {firstName} {lastName}{' '}
  //     </p>
  //   )
  // }
  // function Hello3() {
  //   const data = {
  //     firstName: '小西',
  //     lastName: 'こにたん',
  //   }
  //   return <Hello2 {...data} />
  // }

  return (
    <div className="App">
      <h1 className="tx-ml"> Hello CodeSandbox</h1>
      {/* <Hello name="Block" /> */}
      {/* <Hello2 firstName="山田" lastName="たかし" /> */}
      {/* <Hello3 /> */}
      {/* <Human age={24} /> */}
      {/* <Basic /> */}
      <DropDownMenu />
      <Article title="Hi"/>
    </div>
  )
}
