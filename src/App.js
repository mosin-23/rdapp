import React from 'react'
import Account from './Account';
import Bonus from './Bonus';
import {  useSelector } from 'react-redux';
const App = () => {

  const amount=useSelector(state=>state.account.amount)
  const points=useSelector(state=>state.bonus.points)
  return (
    <div>
      <h2>Current Amount: {amount}</h2>
      <h2>Total Bonus: {points}</h2>
      <Account/>
      <Bonus/>
    </div>
  )
}

export default App;