import { useEffect } from "react";
import SimonGame from "../Game";

function showWithDelay(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
export default function useResetconDelay({
  message,
  isStrict,
  setGame,
  setIsHumanTurn,
  setIsRepeating,
  setLevel,
  setMessage,
}) {
  useEffect(() => {
    if (
      message === "💀" ||
      (message === "⚠️" && isStrict) ||
      message === "😄"
    ) {
      showWithDelay(1200).then(() => {
        const newGame = new SimonGame();
        newGame.strict = isStrict;
        setGame(newGame);
        setIsHumanTurn(false);
        setIsRepeating(false);
        setLevel(0);
        setMessage(null);
      });
    }
  }, [
    message,
    isStrict,
    setGame,
    setIsHumanTurn,
    setIsRepeating,
    setLevel,
    setMessage,
  ]);
}
