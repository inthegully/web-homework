import React from 'react'
import styled from '@emotion/styled'

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
  return (
    <FormBody>
      <FormTitle>Your Information</FormTitle>
      <InputWrapper>
        <Label>First Name
          <Input type='text' />
        </Label>
        <Label>Last Name
          <Input type='text' />
        </Label>
        <Label>Date of Birth
          <Input type='date' />
        </Label>
      </InputWrapper>
      <Button type='submit' value='Enter Information' />
    </FormBody>
  )
}

export default UserForm
