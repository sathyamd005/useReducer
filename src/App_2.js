import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Welcome from './Welcome';
import Game from './Game';
import Lose from './Lose';
import Win from './Win';
import Leaderboard from './Leaderboard';


function App() {
  let gameStart =()=>{
   setWelcome(false)
   setGame(true)
  }
  let gameWin=()=>{
   setGame(false)
   setWin(true)
  }
  let gameLose=()=>{
    setGame(false)
    setLose(true)
  }
  let playAgain=()=>{
    setWin(false)
    setLose(false)
    setWelcome(true)
    setLeaderboard(false)
  }
  let gameLeaderboard=()=>{
    setWin(false)
    setLeaderboard(true)
  }
 const [welcome,setWelcome]=useState(true)
 const[game,setGame]=useState(false)
 const[lose,setLose]=useState(false)
 const [win,setWin]=useState(false)
 const[leaderBoard,setLeaderboard]=useState(false)
  return (
    <div className="App">
      { welcome ? <Welcome gameStart={gameStart} /> :null}
      { game ? <Game gameWin={gameWin} gameLose={gameLose} /> :null}
      { lose ? <Lose playAgain={playAgain} />:null}
      {win ?<Win playAgain={playAgain} gameLeaderboard={gameLeaderboard}  />:null}
      {leaderBoard ?<Leaderboard  playAgain={playAgain} />:null}
    </div>
  );
}

export default App;
