import React, {  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './slices/bonusSlice'
import './index.css'
const Bonus = () => {
  const points=useSelector(state=>state.bonus.points)
  const dispatch=useDispatch();
  return (
    <div className='bonus'>
      <h2>Bonus Component</h2>
      <h2>Total Points{points}</h2>
      <div className="btn">
      <button onClick={()=>dispatch(increment())}>Increment+</button>
      </div>
    </div>
  )
}

export default Bonus
