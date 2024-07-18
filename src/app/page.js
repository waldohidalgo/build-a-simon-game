import Image from "next/image";

import Board from "./components/Board";

export default function Home() {
  return (
    <>
      <header className="py-6 text-center bg-gray-300">
        <h1 className="text-3xl font-bold underline ">Simon Game</h1>
      </header>
      <main className="py-6 bg-yellow-300/30">
        <Board />
      </main>
    </>
  );
}
