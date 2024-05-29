import React from 'react'

function Leaderboard({stateMutate}) {
  return (
    <div>
        <h1>LeaderBoard</h1>
        <button onClick={()=>stateMutate("WELCOME")}>Play Again</button>
    </div>
  )
}

export default Leaderboard