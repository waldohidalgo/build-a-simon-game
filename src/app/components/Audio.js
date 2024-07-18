const sounds = {
  sound1: "/sounds/simonSound1.mp3",
  sound2: "/sounds/simonSound2.mp3",
  sound3: "/sounds/simonSound3.mp3",
  sound4: "/sounds/simonSound4.mp3",
};

export default function Audio({ audio1Ref, audio2Ref, audio3Ref, audio4Ref }) {
  return (
    <div>
      <audio ref={audio1Ref} src={sounds.sound1}></audio>
      <audio ref={audio2Ref} src={sounds.sound2}></audio>
      <audio ref={audio3Ref} src={sounds.sound3}></audio>
      <audio ref={audio4Ref} src={sounds.sound4}></audio>
    </div>
  );
}
