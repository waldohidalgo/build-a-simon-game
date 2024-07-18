import React, { useState, useEffect, useRef } from "react";
import SimonGame from "./SimonGame"; // Asegúrate de importar la clase

const SimonComponent = () => {
  const [game, setGame] = useState(new SimonGame());
  const [message, setMessage] = useState("");
  const [humanTurn, setHumanTurn] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    game.addStep();
    game.playSequence(playSound, () => {
      setHumanTurn(true);
      setGame({ ...game });
    });
  }, []);

  const playSound = (number) => {
    // Lógica para reproducir el sonido
  };

  const handleUserClick = (number) => {
    if (humanTurn) {
      const result = game.checkStep(number);
      if (result === "correct-sequence") {
        setMessage("Correct sequence! Adding new step.");
        game.addStep();
        setHumanTurn(false);
        game.playSequence(playSound, () => {
          setHumanTurn(true);
          setGame({ ...game });
        });
      } else if (result === "correct-step") {
        setMessage("Correct step!");
      } else {
        setMessage("Incorrect step. Game over.");
        game.resetGame();
        game.addStep();
        setHumanTurn(false);
        game.playSequence(playSound, () => {
          setHumanTurn(true);
          setGame({ ...game });
        });
      }
    }
  };

  return (
    <div>
      <p>{message}</p>
      <div
        className={`bg-green-800 boardSquare ${
          humanTurn ? "hover:bg-green-400 cursor-pointer" : ""
        }`}
        onClick={() => handleUserClick(1)}
      >
        {/* Contenido del div */}
      </div>
      {/* Otros divs para los colores restantes */}
    </div>
  );
};

export default SimonComponent;
