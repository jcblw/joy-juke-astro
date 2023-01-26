import type { Album } from "../types";

export const createAlbumSlug = (album: Album) => {
  const name = album["im:name"].label;
  const artist = album["im:artist"].label;
  return encodeURIComponent(
    `${name}-${artist}`.toLowerCase().replace(/[\W_]+/g, "_")
  );
};
