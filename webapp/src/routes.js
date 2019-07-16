import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { TransactionTracker } from './transaction-tracker'

// <nav css={navStyle}>
//   <ul >
//     <li>
//       <Link to='/'>Home</Link>
//     </li>
//     <li>
//       <Link to='/another'>Another route</Link>
//     </li>
//   </ul>
// </nav>

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={TransactionTracker} exact path='/transaction' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    padding: 8px;
    background: #F5F6F7;
    width: 100%;
    height: 100vh;
`

// const navStyle = css`
//   grid-row: 1;
//
//   & > ul {
//       display: flex;
//       flex-direction: row;
//       list-style-type: none;
//   }
//
//   & > ul > li:not(:first-child) {
//     margin-left: 16px;
//   }
// `

const contentStyle = css`
  grid-row: 2;
  width: 100%;
  height: 100%;
`
