import getLower from "../assets/1.jpg";
import NeverBe from "../assets/2.jpg";
import WeCantStop from "../assets/3.jpg";
import Crush from "../assets/4.jpg";
import Drop7 from "../assets/5.jpg";
import Artist from "../assets/6.jpg";
import Artist1 from "../assets/7.jpg";
import Artist2 from "../assets/8.jpg";
import Artist3 from "../assets/9.jpg";
import Artist4 from "../assets/10.jpg";

export type artistsType = {
  name: string;
  image: string;
  type: "Artists";
};

export const artistsData:artistsType[] = [
  {
    name: "Brent Rivera",
    type: "Artists",
    image: Artist4,
  },
  {
    name: "Artist for Grenfell",
    type: "Artists",
    image: Artist2,
  },
  {
    name: "Artist vs Poet",
    type: "Artists",
    image: getLower,
  },
  {
    name: "ABBA",
    type: "Artists",
    image: Artist3,
  },
];
