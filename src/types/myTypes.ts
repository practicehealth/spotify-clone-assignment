export type Song = {
  id: number;
  title: string;
  description: string;
  artist: string;
  image: string;
  type: string;
  src: string;
};

export type Category = {
  id: number;
  title: string;
  cover: string;
  color: string;
};

export type Playlist = {
  id: number;
  title: string;
  description: string;
  image: string;
};
