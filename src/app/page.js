import Image from "next/image";

import Board from "./components/Board";

export default function Home() {
  return (
    <>
      <header className="py-6 text-center bg-gray-300">
        <h1 className="text-3xl font-bold underline ">Simon Game</h1>
        <p className="text-center mt-5 max-w-[500px] mx-auto">
          The Game has <strong>20 levels</strong> and two game modes:{" "}
          <strong>normal</strong> and <strong>strict</strong>. In normal mode,
          if the user makes a mistake, the PC repeats the sequence. In strict
          mode if the user makes a mistake, the user has lost and the game is
          restarted.
        </p>
      </header>
      <main className="py-6 bg-yellow-300/30">
        <Board />
      </main>
    </>
  );
}
