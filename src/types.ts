// other apis found here https://gist.github.com/iggym/6023041

interface Entry {
  label: string;
}

interface EntryWithAttributes<attrs extends any> extends Entry {
  attributes: attrs;
}

export interface Album {
  "im:name": Entry;
  "im:image": EntryWithAttributes<{ height: string }>[];
  "im:itemCount": Entry;
  "im:price": EntryWithAttributes<{ amount: string; currency: string }>;
  "im:contentType": {
    "im:contentType": { attributes: { label: string; term: string } };
    attributes: { label: string; term: string };
  };
  rights: Entry;
  title: Entry;
  link: { attributes: { rel: string; type: string; href: string } };
  id: EntryWithAttributes<{ "im:id": string; "im:bundleId": string }>;
  "im:artist": EntryWithAttributes<{ href: string }>;
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": EntryWithAttributes<{ label: string }>;
}

export interface Collection {
  wrapperType: "collection";
  collectionType: string;
  artistId: number;
  collectionId: number;
  amgArtistId: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  collectionExplicitness: string;
  trackCount: number;
  copyright: string;
  country: string;
  currency: string;
  releaseDate: string;
  primaryGenreName: string;
}

export interface Song {
  wrapperType: "track";
  kind: "song";
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
}
