import { useEffect } from "react";

function controlAudio(audioTag) {
  if (audioTag.paused) {
    audioTag.play();
  } else {
    audioTag.pause();
    audioTag.currentTime = 0;
    audioTag.play();
  }
}

export default function useAudio(
  position,
  audio1Ref,
  audio2Ref,
  audio3Ref,
  audio4Ref
) {
  useEffect(() => {
    switch (position) {
      case 1:
        controlAudio(audio1Ref.current);
        break;
      case 2:
        controlAudio(audio2Ref.current);
        break;
      case 3:
        controlAudio(audio3Ref.current);
        break;
      case 4:
        controlAudio(audio4Ref.current);
        break;
      default:
        break;
    }
  }, [position, audio1Ref, audio2Ref, audio3Ref, audio4Ref]);
}
