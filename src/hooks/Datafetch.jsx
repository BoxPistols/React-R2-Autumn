import React, {useState, useEffect} from 'react'

export default function Datafetch() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const fetchData = async () =>{
    const res = await fetch('https://api.randomuser.me/')
    const data = await res.json()
    const [item] = data.results

    setUser(item)
    setLoading(false )
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div>
      <h2>Datafetch</h2>
      {loading ? <p>loading...</p> : <p>{user.name.first} {user.name.last}</p>} 
    </div>
  )
}
