"use client";

import { useState, useRef, useEffect } from "react";
import Audio from "./Audio";
import SimonGame from "../Game";
import useAudio from "../Hooks/useAudio";
import useRecorridoConDelay from "../Hooks/useRecorridoConDelay";
import useResetconDelay from "../Hooks/useResetconDelay";
import useTimeoutHuman from "../Hooks/useTimeoutHuman";

export default function Board() {
  const [audio1Ref, audio2Ref, audio3Ref, audio4Ref] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const isTouching = useRef(false);

  const [position, setPosition] = useState(0);
  const [isHumanTurn, setIsHumanTurn] = useState(false);
  const [game, setGame] = useState(null);
  const [isRepeating, setIsRepeating] = useState(false);
  const [level, setLevel] = useState(0);
  const [message, setMessage] = useState(null);
  const [isStrict, setIsStrict] = useState(false);

  const [isSequenceSound, setIsSequenceSound] = useState(false);
  const [recorrido, setRecorrido] = useState(null);

  useAudio(position, audio1Ref, audio2Ref, audio3Ref, audio4Ref);

  useRecorridoConDelay({
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
  });

  useEffect(() => {
    if (
      game &&
      isHumanTurn === false &&
      isRepeating === false &&
      message !== "😄" &&
      message !== "💀" &&
      message !== "⚠️"
    ) {
      const sequence = game.computerTurn();
      //console.log(sequence);
      setLevel(game.getLevel());
      setIsSequenceSound(true);
      setRecorrido({ index: 0 });
    }
    if (game && isHumanTurn === false && isRepeating === true) {
      setIsSequenceSound(true);
      setRecorrido({ index: 0 });
    }
  }, [game, isHumanTurn, isRepeating, message]);

  useResetconDelay({
    message,
    isStrict,
    setGame,
    setIsHumanTurn,
    setIsRepeating,
    setLevel,
    setMessage,
  });

  useTimeoutHuman({
    isHumanTurn,
    game,
    position,
    isRepeating,
    isStrict,
    setMessage,
    setIsHumanTurn,
    setIsRepeating,
  });

  const handleClickBoardHuman = (number) => {
    if (!isTouching.current) {
      if (isHumanTurn && game) {
        setPosition(number);
      }
    }
  };

  const handleTouchBoardHuman = (number) => {
    isTouching.current = true;
    if (isTouching.current) {
      if (isHumanTurn && game) {
        setPosition(number);
      }
    }
  };

  const handleMouseUpBoardHuman = () => {
    if (!isTouching.current) {
      if (isHumanTurn && game) {
        //console.log("mouse up", position); //position antigua
        setPosition(0);
        const step = game.stepHuman;
        const [result, sequence] = game.humanTurn(step, position);

        if (result === "pc" && !sequence) {
          //console.log("turno pc");
          setIsHumanTurn(false);
        }
        if (result === "pc" && sequence && isStrict === false) {
          //console.log("repeticion PC turno PC");
          setMessage("⚠️");
          setIsHumanTurn(false);
          setIsRepeating(true);
        }
        if (!result && !sequence && isStrict) {
          //console.log("muerto turno PC");
          setMessage("💀");
          setIsHumanTurn(false);
        }
        if (result === "win") {
          //console.log("win turno PC");
          setMessage("😄");
          setIsHumanTurn(false);
        }
      }
    }
  };

  const handleTouchEndBoardHuman = () => {
    if (isTouching.current) {
      if (isHumanTurn && game) {
        //console.log("mouse up", position); //position antigua
        setPosition(0);
        const step = game.stepHuman;
        const [result, sequence] = game.humanTurn(step, position);

        if (result === "pc" && !sequence) {
          //console.log("turno pc");
          setIsHumanTurn(false);
        }
        if (result === "pc" && sequence && isStrict === false) {
          //console.log("repeticion PC turno PC");
          setMessage("⚠️");
          setIsHumanTurn(false);
          setIsRepeating(true);
        }
        if (!result && !sequence && isStrict) {
          //console.log("muerto turno PC");
          setMessage("💀");
          setIsHumanTurn(false);
        }
        if (result === "win") {
          //console.log("win turno PC");
          setMessage("😄");
          setIsHumanTurn(false);
        }
      }
    }
  };

  return (
    <div>
      <Audio
        audio1Ref={audio1Ref}
        audio2Ref={audio2Ref}
        audio3Ref={audio3Ref}
        audio4Ref={audio4Ref}
      />
      <div>
        <div className="flex justify-center gap-3 flex-wrap">
          <button
            className={`button   ${game ? "bg-[#00ff00]" : "bg-gray-100"}`}
            onClick={() => {
              setGame(new SimonGame());
              setIsHumanTurn(false);
              setIsRepeating(false);
              setLevel(0);
            }}
          >
            start/restart
          </button>
          <button
            className={`button  ${
              isStrict ? "bg-[#ff0000] text-white" : "bg-gray-100"
            } ${
              game && isHumanTurn
                ? "cursor-pointer"
                : "cursor-default opacity-50"
            }`}
            onClick={() => {
              if (game && isHumanTurn) {
                //console.log("click strict");
                setIsStrict(!isStrict);
                game.strict = !isStrict;
              }
            }}
          >
            strict mode
          </button>
        </div>
        <div className="flex justify-center  mt-5 items-center">
          <span className="font-bold p-[2px] border border-black ">
            Board Selected:{" "}
          </span>
          <span className="font-digital text-[20px] bg-black text-verdeBrillante px-2">
            {position}
          </span>
        </div>
      </div>
      <div className="circleBoard">
        <div className="boxCounter">
          <div className="font-bold bg-white text-[14px]">Counter</div>
          <div className="text-verdeBrillante bg-black text-3xl font-digital">
            {message || level.toString().padStart(2, "0")}
          </div>
        </div>
        <div
          className={`${
            position === 1 ? "bg-green-900" : "bg-green-500"
          } boardSquare ${isHumanTurn && "cursor-pointer"}`}
          onMouseDown={() => {
            handleClickBoardHuman(1);
          }}
          onMouseUp={handleMouseUpBoardHuman}
          onTouchStart={() => handleTouchBoardHuman(1)}
          onTouchEnd={handleTouchEndBoardHuman}
        ></div>
        <div
          className={`${
            position === 2 ? "bg-red-900" : "bg-red-500"
          } boardSquare ${isHumanTurn && "cursor-pointer"} `}
          onMouseDown={() => handleClickBoardHuman(2)}
          onMouseUp={handleMouseUpBoardHuman}
          onTouchStart={() => handleTouchBoardHuman(2)}
          onTouchEnd={handleTouchEndBoardHuman}
        ></div>
        <div
          className={`${
            position === 3 ? "bg-yellow-900" : "bg-yellow-500"
          } boardSquare ${isHumanTurn && "cursor-pointer"}`}
          onMouseDown={() => handleClickBoardHuman(3)}
          onMouseUp={handleMouseUpBoardHuman}
          onTouchStart={() => handleTouchBoardHuman(3)}
          onTouchEnd={handleTouchEndBoardHuman}
        ></div>
        <div
          className={`${
            position === 4 ? "bg-blue-900" : "bg-blue-500"
          } boardSquare ${isHumanTurn && "cursor-pointer"}`}
          onMouseDown={() => handleClickBoardHuman(4)}
          onMouseUp={handleMouseUpBoardHuman}
          onTouchStart={() => handleTouchBoardHuman(4)}
          onTouchEnd={handleTouchEndBoardHuman}
        ></div>
      </div>
    </div>
  );
}
