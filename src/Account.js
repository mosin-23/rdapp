import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { increment, incrementByAmount } from './slices/accountSlice';
import { decrement } from './slices/accountSlice';

const Account = () => {
  const[value,setValue]=useState(null);
  const dispatch=useDispatch();
  const amount=useSelector(state=>state.account.amount)
  return (
    <>
    <div className="acc">
    <div>
      <h1>Account Component</h1>
      <h2>Amount:{amount}</h2>
    </div>
    <div className="buttons">
        <button onClick={()=>dispatch(increment())}>Increment+</button>
        <button onClick={()=>dispatch(decrement())}>Decrement-</button>
        <input type="text" className="text"value={value} onChange={(e)=>setValue(+e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(value

        ))}>Increment by No</button>
    </div>
    </div>
    </>
  )
}

export default Account
