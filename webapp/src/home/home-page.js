import React, { Fragment, useState, useEffect } from 'react'
import UserCard from '../components/user-card'
import fetch from 'isomorphic-fetch'

export const Home = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({ data: [] })

  // const query = `
  //   query {
  //     mutation {
  //       addUser: {
  //         dob: String
  //         firstName: String
  //         lastName: String
  //       }
  //     }
  //   }
  // `

  const mutation = `
    mutation {
      addUser: {
        dob: String
        firstName: String
        lastName: String
      }
    }
  `

  const url = 'http://localhost:8000/graphql'

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: mutation })
  }

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(console.error)
  }, [])

  return (
    <Fragment>
      <UserCard />
    </Fragment>
  )
}

export default Home
