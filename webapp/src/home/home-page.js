import React, { Fragment } from 'react'
import styled from '@emotion/styled'

const CardWrapper = styled.div`
  width: 348px;
  margin: 0 auto;
  font-family: helvetica, sans-serif;
  @media (min-width: 750px) {
    width: 696px;
    padding-top: 48px;
  }
`

const Card = styled.div`
  padding: 24px;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 0 3px 0 #D0D2D6, 0 1px 2px 0 #D0D2D6;
  overflow: hidden;
`

const CardLabel = styled.h3`
  color: #06142A;
  margin-top: 0px;
`

const GrayDivider = styled.hr`
  background: #F5F6F7;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  border-style: none;
  margin: 0;
`

const Form = styled.form`
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
//
// const CurrencySpan = styled.div`
//   position: relative;
//   display: inline;
//   font-size: 16px;
//
//   &:before {
//     content: '$';
//     position: absolute;
//     top: 30%;
//     left: 10px;
//     z-index: 1;
//   }
// `

const Chevron = styled.div`
  border: 3px solid #70727B;
  border-left-color: transparent;
  border-top-color: transparent;
  border-top-width: 0;
  border-left-width: 0;
  border-radius: 2px;
  transform: translateY(calc(-50% - 0.25em)) rotate(45deg);
  transform-origin: center center;
  position: absolute;
  right: 8px;
  top: 70%;
  width: 8px;
  height: 8px;
  pointer-events: none;
  z-index: 10;
`

const Select = styled.select`
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
  border-color: #D0D2D6;
  background-color: #FFFFFF;
  appearance: none;
  border-radius: 0px;
  font-family: inherit;
  height: 34px;
  margin-top: 4px;
`

const Button = styled.input`
  font-size: 16px;
  padding: 8px;
  appearance: none;
  width: 200px;
  background-color: #00BB8B;
  color: white;
  border-radius: 4px;
  border-style: none;
  margin-top: 8px;
`

export const Home = () => {
  return (
    <Fragment>
      <CardWrapper>
        <Card>
          <CardLabel>Transaction Tracker</CardLabel>
          <GrayDivider />
          <Form>
            <FormTitle>Enter Transaction:</FormTitle>
            <InputWrapper>
              <Label>Date
                <Input type='date' />
              </Label>
              <Label>Amount
                <Input min='0.01' prefix={'$'} step='0.01' type='number' />
              </Label>
              <Label>Merchant
                <Input type='text' />
              </Label>
              <Label>Category
                <Chevron />
                <Select>
                  <option value='gas'>Gas</option>
                  <option value='groceries'>Groceries</option>
                  <option value='healthCare'>Health Care</option>
                  <option value='pet'>Pet</option>
                  <option value='restaurant'>Restaurant</option>
                  <option value='shopping'>Shopping</option>
                  <option value='miscellaneous'>Miscellaneous</option>
                </Select>
              </Label>
            </InputWrapper>
            <Button type='submit' value='Enter Transaction' />
          </Form>
        </Card>
      </CardWrapper>
    </Fragment>
  )
}

export default Home
