import TrackTime from "./TrackTime";
import { currentlyPlaying } from "../store/player";
import type { Song as SongType } from "../types";

export default function Song({
  trackName,
  trackNumber,
  artistName,
  song,
  trackTimeMillis,
}: {
  trackNumber: number;
  trackName: string;
  artistName: string;
  trackTimeMillis: number;
  song: SongType;
}) {
  return (
    <>
      <div
        className="p-3 flex items-center cursor-pointer bg-transparent hover:bg-slate-800 active:bg-zinc-900 transition-colors"
        onClick={() => {
          currentlyPlaying.set(song);
        }}
      >
        <div>
          <p className="text-lg text-slate-400 mr-5 select-none">
            {trackNumber}
          </p>
        </div>
        <div className="flex-1">
          <h6 className="text-xl text-white select-none">{trackName}</h6>
          <p className="text-md text-slate-400 select-none">{artistName}</p>
        </div>
        <div className="flex-0 ml-5">
          <p className="text-md text-slate-400 select-none">
            <TrackTime millis={trackTimeMillis} />
          </p>
        </div>
      </div>
      <hr className="border-slate-800" />
    </>
  );
}
