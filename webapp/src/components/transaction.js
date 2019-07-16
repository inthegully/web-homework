import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

const TransactionWrapper = styled.div`
  border-top: 1px solid #D0D2D6;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
`

const Delete = styled(FaTrashAlt)`
  color: #D0D2D6;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-top: 14px;

  &:hover {
    color: #CF2F34;
  }
`

const Copy = styled.p`
  margin-top: 16px;
  color: #06142A;
  margin-bottom: 0;
`

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 750px) {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
  }
`

const TransactionDate = styled(Copy)`
  padding: 0 16px;
`

const TransactionAmount = styled(Copy)`
  padding: 0 16px;
`

const TransactionMerchant = styled(Copy)`
  padding: 0 16px;
`

const TransactionCategory = styled(Copy)`
  padding: 0 16px;
`

const TransactionType = styled(Copy)`
  padding: 0 16px;
`

const Edit = styled(FaEdit)`
  color: #D0D2D6;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-top: 14px;

  &:hover {
    color: #00BB8B;
  }
`

export const Transaction = () => {
  return (
    <Fragment>
      <TransactionWrapper>
        <Delete />
        <FlexDiv>
          <TransactionDate>6/12/19</TransactionDate>
          <TransactionAmount>$100.00</TransactionAmount>
          <TransactionType>Credit</TransactionType>
          <TransactionMerchant>Anthropologie</TransactionMerchant>
          <TransactionCategory>Shopping</TransactionCategory>
        </FlexDiv>
        <Edit />
      </TransactionWrapper>
    </Fragment>
  )
}

export default Transaction
