import React from 'react'

function Win({stateMutate}) {
  return (
    <div>
        <h1>You Win</h1>
        <button onClick={()=>stateMutate("WELCOME")}>play Again</button>
        <button onClick={()=>stateMutate("LEADERBOARD")}>Leaderboard</button>
    </div>
  )
}

export default Win