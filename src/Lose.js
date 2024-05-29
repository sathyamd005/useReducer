import React from 'react'

function Lose({stateMutate}) {
  return (
    <div>
        <h1>You Lose</h1>
        <h3>points:40</h3>
        <button onClick={()=>stateMutate("WELCOME")}>Play Again</button>
    </div>
  )
}

export default Lose