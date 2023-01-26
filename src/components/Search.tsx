import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { searchQuery, selectedId } from "../store/search";
import type { Album } from "../types";
import Image from "./Image";
import { createAlbumSlug } from "../lib/url";

export default ({ albums }: { albums: Album[] }) => {
  const $searchQuery = useStore(searchQuery);
  const $selectedId = useStore(selectedId);
  const matchingAlbums = albums
    .filter(
      (album) =>
        album["im:name"].label
          .toLowerCase()
          .includes($searchQuery.toLowerCase()) ||
        album["im:artist"].label
          .toLowerCase()
          .includes($searchQuery.toLowerCase())
    )
    .slice(0, 5);

  useEffect(() => {
    if (matchingAlbums.length > 0) {
      selectedId.set(matchingAlbums[0].id.attributes["im:id"]);
    }
  }, [$searchQuery]);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        e.preventDefault();
        window._search.showModal();
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const index = matchingAlbums.findIndex(
      (album) => album.id.attributes["im:id"] === $selectedId
    );

    if (e.key === "ArrowDown" && matchingAlbums[index + 1]) {
      selectedId.set(matchingAlbums[index + 1].id.attributes["im:id"]);
    }
    if (e.key === "ArrowUp" && matchingAlbums[index - 1]) {
      selectedId.set(matchingAlbums[index - 1].id.attributes["im:id"]);
    }
    if (e.key === "Enter") {
      window.location.href = `/album/${createAlbumSlug(matchingAlbums[index])}`;
    }
  };

  return (
    <dialog id="_search" className="m-0 p-0 backdrop-blur-sm">
      <div className="w-full h-full flex items-start mt-4 md:items-center md:mt-0 justify-center">
        <div className="w-1/2 min-w-fit bg-zinc-800 rounded-t-md relative">
          <input
            name="search-query"
            type="text"
            className="w-full h-10 p-8 bg-transparent outline-0 text-white font-bold"
            placeholder="Search..."
            value={$searchQuery}
            onChange={(e) => {
              searchQuery.set(e.target.value);
            }}
            onKeyUp={onKeyUp}
            autoComplete="off"
          />
          <hr className="border-zinc-900" />
          <div className="py-4 absolute bg-zinc-800 rounded-b-md w-full ">
            {matchingAlbums.map((album) => {
              return (
                <div
                  className={`flex flex-row items-center px-8 py-2 hover:bg-zinc-700 active:bg-zinc-900 ${
                    $selectedId === album.id.attributes["im:id"]
                      ? "bg-zinc-900"
                      : ""
                  }`}
                  key={album.id?.label}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      window.location.href = `/album/${createAlbumSlug(album)}`;
                    }
                  }}
                  onClick={() => {
                    window.location.href = `/album/${createAlbumSlug(album)}`;
                  }}
                >
                  <Image
                    src={album["im:image"][1].label}
                    alt={album["im:name"]?.label}
                    className="w-10 h-10 rounded-md"
                  />
                  <div className="ml-4">
                    <div className="text-white font-bold">
                      {album["im:name"]?.label}
                    </div>
                    <div className="text-slate-400">
                      {album["im:artist"]?.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </dialog>
  );
};
