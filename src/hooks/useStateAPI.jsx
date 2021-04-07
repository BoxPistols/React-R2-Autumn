import React, { useState, useEffect } from 'react'

function useStateAPI() {
	const [ user, setUser ] = useState(null)
	const [ loading, setLoading ] = useState(true)

	const fetchData = async () => {
		const response = await fetch('https://api.randomuser.me/')
		const data = await response.json()
		const [ item ] = data.response

		setUser(item)
		setLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])
	return (
		<div>
			{
				loading ? <h1>loading....</h1> :
				<h1>{user.name.first} OK!</h1>}
		</div>
	)
}

export default useStateAPI
