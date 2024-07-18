import { useEffect } from "react";

export default function useTimeoutHuman({
  isHumanTurn,
  game,
  position,
  isRepeating,
  isStrict,
  setMessage,
  setIsHumanTurn,
  setIsRepeating,
}) {
  useEffect(() => {
    if (isHumanTurn && game && position === 0) {
      if (isStrict) {
        const timeOutPlayer = setTimeout(() => {
          setMessage("💀");
          setIsHumanTurn(false);
        }, 10000);
        return () => clearTimeout(timeOutPlayer);
      } else {
        if (isRepeating === false) {
          const timeOutPlayer = setTimeout(() => {
            setMessage("⚠️");
            setIsHumanTurn(false);
            setIsRepeating(true);
          }, 10000);
          return () => clearTimeout(timeOutPlayer);
        }
      }
    }
  }, [
    isHumanTurn,
    game,
    isStrict,
    position,
    isRepeating,
    setMessage,
    setIsHumanTurn,
    setIsRepeating,
  ]);
}
