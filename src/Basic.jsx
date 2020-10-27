import React from 'react'
//props 省略
export default function Basic() {
  const El = ({name}) =>{
    return <h1>{name}</h1>
  }
  return(
    <El name="名前"/>
  )
}
