import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { searchQuery, selectedId } from "../store/search";
import type { Album } from "../types";
import Image from "./Image";
import { createAlbumSlug } from "../lib/url";

interface SearchItemProps {
  id: string;
  selectedId: string | null;
  image: string;
  name: string;
  artist: string;
  href: string;
}

export default ({
  id,
  selectedId,
  name,
  image,
  artist,
  href,
}: SearchItemProps) => {
  return (
    <div
      className={`flex flex-row items-center px-8 py-2 hover:bg-zinc-700 active:bg-zinc-900 ${
        selectedId === id ? "bg-zinc-900" : ""
      }`}
      key={id}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          window.location.href = href;
        }
      }}
      onClick={() => {
        window.location.href = href;
      }}
    >
      <Image src={image} alt={name} className="w-10 h-10 rounded-sm" />
      <div className="ml-4">
        <div className="text-white font-bold">{name}</div>
        <div className="text-slate-400">{artist}</div>
      </div>
    </div>
  );
};
