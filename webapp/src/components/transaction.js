import React, { Fragment } from 'react'
import styled from '@emotion/styled'

const TransactionWrapper = styled.div`
  border-top: 1px solid #D0D2D6;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Transaction = () => {
  return (
    <Fragment>
      <TransactionWrapper>
        <TransactionDate>6/12/19</TransactionDate>
        <TransactionAmount>$100.00</TransactionAmount>
        <TransactionMerchant>Anthropologie</TransactionMerchant>
        <TransactionCategory>Shopping</TransactionCategory>
      </TransactionWrapper>
    </Fragment>
  )
}

export default Transaction
