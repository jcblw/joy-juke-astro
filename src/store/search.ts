import { atom } from "nanostores";

export const isSearchOpen = atom(false);
export const searchQuery = atom("");
export const selectedId = atom<null | string>(null);
