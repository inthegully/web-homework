import React from 'react'
import styled from '@emotion/styled'
import Form from './form'
import Transaction from './transaction'

const CardWrapper = styled.div`
  width: 348px;
  margin: 0 auto;
  font-family: helvetica, sans-serif;
  @media (min-width: 750px) {
    width: 696px;
    padding-top: 48px;
  }
`

const CardBody = styled.div`
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

export const Card = () => {
  return (
    <CardWrapper>
      <CardBody>
        <CardLabel>Transaction Tracker</CardLabel>
        <GrayDivider />
        <Form />
        <Transaction />
      </CardBody>
    </CardWrapper>
  )
}

export default Card
