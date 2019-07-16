import React, { Fragment, useState, useEffect } from 'react'
import UserCard from '../components/user-card'
import fetch from 'isomorphic-fetch'

export const Home = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({ data: [] })

  useEffect(
    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: {
        query: `
          mutation {
            addUser: {
              dob: String
              firstName: String
              lastName: String
            }
          }
        `
      }
    }).then(function(response) {

    }).catch(() => this.setState({ hasErrors: true }))
  )

  return (
    <Fragment>
      <UserCard />
    </Fragment>
  )
}

export default Home
