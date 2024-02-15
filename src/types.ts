export interface Playlist {
  id: String;
  artist: string;
  title: string;
  artwork: string;
}

export interface Song {
  id: String;
  title: string;
  artist: string;
  artwork: string;
}

export interface Genre {
  id: String;
  name: string;
  img: number;
  bgColor: string;
}

export interface Album {
  name: string;
  id: string;
  cover: string;
}

export interface Artist {
  name: string;
  id: string;
  image: string;
}
