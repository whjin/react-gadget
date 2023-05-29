import { useState } from "react";
import Canvas from "./Canvas";

export default function Scoreboard () {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick () {
    setPlayer({
      ...player,
      score: player.score + 1
    });
  }

  function handleFirstNameChange (e) {
    setPlayer({
      ...player,
      firstName: e.target.value
    });
  }

  function handleLastNameChange (e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  function Score () {
    return (
      <>
        <label>
          Score:
          <b>{player.score}</b>
          {' '}
          <button onClick={handlePlusClick}>+1</button>
        </label>
        <label>
          First Name:
          <input
            value={player.firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last Name:
          <input
            value={player.lastName}
            onChange={handleLastNameChange}
          />
        </label>
      </>
    );
  }

  function Scoreboard ({ children }) {
    return (
      <div className="common-container scoreboard-container">
        {children}
      </div>
    );
  }

  return (
    <Scoreboard>
      {/* <Score /> */}
      <Canvas />
    </Scoreboard>
  );
}