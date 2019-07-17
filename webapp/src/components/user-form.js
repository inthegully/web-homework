import React, { useState } from 'react'
import styled from '@emotion/styled'
import fetch from 'isomorphic-fetch'

const FormBody = styled.form`
  display: flex;
  flex-direction: column;
`

const FormTitle = styled.h4`
  color: #70727B;
  margin: 16px 0;
`

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #70727B;
  margin: 8px 0;
  position: relative;
  width: 200px;
`

const Input = styled.input`
  border-style: solid;
  border-color: #D0D2D6;
  border-width: 1px;
  font-size: 16px;
  padding: 4px;
  color: #06142A;
  overflow: hidden;
  font-family: inherit;
  height: 24px;
  margin-top: 4px;
`

const Button = styled.input`
  font-size: 16px;
  padding: 8px;
  appearance: none;
  width: 200px;
  background-color: #0091EA;
  color: white;
  border-radius: 4px;
  border-style: none;
  margin-top: 8px;
`

export const UserForm = () => {
  const [values, setValues] = useState({ firstName: '', lastName: '', dob: '' })

  const mutation = `
    mutation addUser($dob: String!, $firstName: String!, $lastName: String!) {
      addUser(dob: $dob, firstName: $firstName, lastName: $lastName) {
        dob
        firstName
        lastName
      }
    }
  `

  const url = 'http://localhost:8000/graphql'

  const passVariables = (values) => {
    const { firstName, lastName, dob } = values
    const payload = { query: mutation, variables: { dob, firstName, lastName } }
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    fetch(url, options)
      .then(response => response.json())
      .then(data => console.log('data', data))
      .catch(console.error)
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const addUserToValues = (e) => {
    e.preventDefault()
    passVariables(values)
    window.location = '/transaction'
  }

  return (
    <FormBody>
      <FormTitle>Your Information</FormTitle>
      <InputWrapper>
        <Label>First Name
          <Input name='firstName' onChange={handleInputChange} type='text' value={values.firstName} />
        </Label>
        <Label>Last Name
          <Input name='lastName' onChange={handleInputChange} type='text' value={values.lastName} />
        </Label>
        <Label>Date of Birth
          <Input name='dob' onChange={handleInputChange} type='date' value={values.dob} />
        </Label>
      </InputWrapper>
      <Button onClick={addUserToValues} type='submit' value='Enter Information' />
    </FormBody>
  )
}

export default UserForm
