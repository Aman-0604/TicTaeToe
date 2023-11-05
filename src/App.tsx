import React, { useState } from "react";
import "./App.css"
import Block from "./components/Block";

const App : React.FC = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [current, setCurrent] = useState("X");
  console.log(state);

  function checkWinner(state : any[]) {
    const winningCondition = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i = 0 ; i < winningCondition.length ; i++) {
      if(state[winningCondition[i][0]] != null && state[winningCondition[i][0]] === state[winningCondition[i][1]] && state[winningCondition[i][1]] === state[winningCondition[i][2]]) {
        return true;
      }
    }

    return false;
  }
  const handleChange = (index: number) => {
    if(state[index] != null) return;
    let stateCopy = Array.from(state);

    stateCopy[index] = current;
    setState(stateCopy);

    // check winning condition
    const win = checkWinner(stateCopy);

    if(win) {
      alert(`${current} is the winner`);
    }

    setCurrent(current === "X" ? "O" : "X");
  };

  return (
    <>
      <div className="board">
        <div className="row">
          <Block onClick = {() => handleChange(0)} value = {state[0]}/>
          <Block onClick = {() => handleChange(1)} value = {state[1]}/>
          <Block onClick = {() => handleChange(2)} value = {state[2]}/>
        </div>
        <div className="row">
          <Block onClick = {() => handleChange(3)} value = {state[3]}/>
          <Block onClick = {() => handleChange(4)} value = {state[4]}/>
          <Block onClick = {() => handleChange(5)} value = {state[5]}/>
        </div>
        <div className="row">
          <Block onClick = {() => handleChange(6)} value = {state[6]}/>
          <Block onClick = {() => handleChange(7)} value = {state[7]}/>
          <Block onClick = {() => handleChange(8)} value = {state[8]}/>
        </div>
      </div>
    </>
  );
}

export default App;