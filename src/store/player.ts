import { atom } from "nanostores";
import type { Song } from "../types";

export const currentlyPlaying = atom<Song | null>(null);
