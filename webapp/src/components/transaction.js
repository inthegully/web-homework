import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

const TransactionWrapper = styled.div`
  border-top: 1px solid #D0D2D6;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Delete = styled(FaTrashAlt)`
  color: #D0D2D6;
  cursor: pointer;

  &:hover {
    color: #CF2F34;
  }
`

const Copy = styled.p`
  margin-top: 16px;
  color: #06142A;
`

const TransactionDate = styled(Copy)`
`

const TransactionAmount = styled(Copy)`
`

const TransactionMerchant = styled(Copy)``

const TransactionCategory = styled(Copy)``

const Edit = styled(FaEdit)`
  color: #D0D2D6;
  cursor: pointer;

  &:hover {
    color: #00BB8B;
  }
`

export const Transaction = () => {
  return (
    <Fragment>
      <TransactionWrapper>
        <Delete />
        <TransactionDate>6/12/19</TransactionDate>
        <TransactionAmount>$100.00</TransactionAmount>
        <TransactionMerchant>Anthropologie</TransactionMerchant>
        <TransactionCategory>Shopping</TransactionCategory>
        <Edit />
      </TransactionWrapper>
    </Fragment>
  )
}

export default Transaction
