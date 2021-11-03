import React from "react";
import "./GameCard.css";

function GameCard({ gameOfName, description }) {
  return (
    <div className="game-card">
      <div className="game-card__header_wrapper">
        <div className="game-card__header">{gameOfName}</div>
      </div>
      <div className="game-card__description">
        {description?.map((el) => {
          return <li>{el.paragraph}</li>;
        })}
      </div>
      <footer className="game-card__footer">
        <button className="game-card__start_button"> Play </button>
      </footer>
    </div>
  );
}

export default GameCard;
