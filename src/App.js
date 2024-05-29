import React, { useReducer } from "react";
import "./App.css";
import Welcome from "./Welcome";
import Game from "./Game";
import Lose from "./Lose";
import Win from "./Win";
import Leaderboard from "./Leaderboard";
function reducer(state, action) {
  switch (action.type) {
    case "WELCOME":
      return { ui: "WELCOME" };

    case "GAME":
      return { ui: "GAME" };
    case "LOSE":
      return { ui: "LOSE" };
    case "WIN":
      return { ui: "WIN" };
    case "LEADERBOARD":
      return { ui: "LEADERBOARD" };
    default:
      break;
  }
  return state;
}
function App() {
  let stateMutate = (action) => {
    dispatch({ type: action });
  };

  const [state, dispatch] = useReducer(reducer, { ui: "WELCOME" });
  return (
    <div className="App">
      {state.ui === "WELCOME" ? <Welcome stateMutate={stateMutate} /> : null}
      {state.ui === "GAME" ? <Game stateMutate={stateMutate} /> : null}
      {state.ui === "WIN" ? <Win stateMutate={stateMutate} /> : null}
      {state.ui === "LOSE" ? <Lose stateMutate={stateMutate} /> : null}
      {state.ui === "LEADERBOARD" ? (
        <Leaderboard stateMutate={stateMutate} />
      ) : null}
    </div>
  );
}

export default App;
