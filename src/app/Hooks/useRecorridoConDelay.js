import { useEffect } from "react";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export default function useRecorridoConDelay({
  game,
  position,
  setPosition,
  isSequenceSound,
  setIsSequenceSound,
  recorrido,
  setRecorrido,
  isHumanTurn,
  setIsHumanTurn,
  isRepeating,
  setIsRepeating,
  setMessage,
}) {
  useEffect(() => {
    if (game && isSequenceSound && recorrido && isHumanTurn === false) {
      async function delayPosition(position) {
        let index = recorrido.index;

        if (position === 0) {
          if (game.sequencePC[index]) {
            await delay(500);
            setPosition(game.sequencePC[index]);
            recorrido.index++;
          } else {
            setRecorrido(null);
            setIsSequenceSound(false);
            if (isRepeating) {
              setIsRepeating(false);
              setIsHumanTurn(true);
              setMessage(null);
            } else {
              setIsHumanTurn(true);
            }
          }
        } else {
          await delay(500);
          setPosition(0);
        }
      }
      delayPosition(position);
    }
  }, [
    position,
    game,
    isSequenceSound,
    recorrido,
    isHumanTurn,
    isRepeating,
    setIsRepeating,
    setIsSequenceSound,
    setPosition,
    setIsHumanTurn,
    setRecorrido,
    setMessage,
  ]);
}
