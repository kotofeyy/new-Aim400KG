import React from "react";
import GameCard from "../GameCard/GameCard";
import "./GamePanel.css";

const description = [
  { id: 1, paragraph: "вэу это такой крутой режим!" },
  { id: 2, paragraph: "вэу это такой " },
  { id: 3, paragraph: "вэу это такой мусор " },
];

function GamePanel() {
  return (
    <div className="game-panel">
      <GameCard gameOfName="Exact Aiming" description={description} />
      <GameCard gameOfName="Any Amingewrewrwerwerwerewrwefewfewfewfewr" />
      <GameCard gameOfName="Any Aming" />
    </div>
  );
}

export default GamePanel;
