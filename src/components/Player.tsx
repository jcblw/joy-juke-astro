import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { currentlyPlaying } from "../store/player";
import Image from "./Image";
import TrackTime from "./TrackTime";
import Icon, { IconName } from "./Icon";

export default () => {
  const $currentlyPlaying = useStore(currentlyPlaying);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );
  const [, setCounter] = useState(0);
  const isPlaying = Boolean(audioElement && !audioElement.paused);
  const duration = audioElement?.duration ?? 0;
  const currentTime = audioElement?.currentTime ?? 0;

  const onRef = (element: HTMLAudioElement) => {
    setAudioElement(element);
  };

  useEffect(() => {
    if (!audioElement) {
      return;
    }

    const updateCounter = () => {
      setCounter((counter) => counter + 1);
    };

    audioElement.addEventListener("loadedmetadata", updateCounter);
    audioElement.addEventListener("timeupdate", updateCounter);
    audioElement.addEventListener("play", updateCounter);
    audioElement.addEventListener("pause", updateCounter);
    audioElement.addEventListener("ended", updateCounter);

    return () => {
      audioElement.removeEventListener("loadedmetadata", updateCounter);
      audioElement.removeEventListener("timeupdate", updateCounter);
      audioElement.removeEventListener("play", updateCounter);
      audioElement.removeEventListener("pause", updateCounter);
      audioElement.removeEventListener("ended", updateCounter);
    };
  }, [audioElement]);

  if (!$currentlyPlaying) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-center w-full h-full sticky bottom-0 bg-slate-800 p-5 pl-10 pr-10">
      <audio
        className=" hidden"
        src={$currentlyPlaying.previewUrl}
        autoPlay
        ref={onRef}
      />
      <div className="flex-0 pr-4">
        <div className="cursor-pointer p-3 rounded-full bg-slate-900 hover:bg-slate-700 active:bg-zinc-900 inline-block transition-colors">
          <Icon
            iconName={isPlaying ? IconName.Pause : IconName.Play}
            width="24px"
            height="24px"
            className="fill-white"
            onClick={() => {
              if (isPlaying) {
                audioElement?.pause();
              } else {
                audioElement?.play();
              }
            }}
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="text-xs text-slate-400 select-none">Track Preview</p>
        <h6 className="text-l text-white font-bold select-none">
          {$currentlyPlaying.trackName}
        </h6>
        <p className="text-sm text-slate-400 select-none">
          {$currentlyPlaying.artistName}
        </p>
      </div>
      <div className="flex-0 ml-5">
        <p className="text-md text-slate-400 select-none">
          <TrackTime millis={currentTime * 1000} />
          /
          <TrackTime millis={duration * 1000} />
        </p>
      </div>
    </div>
  );
};
