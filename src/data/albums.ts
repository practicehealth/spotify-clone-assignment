import getLower from '../assets/1.jpg'
import NeverBe from '../assets/2.jpg'
import WeCantStop from '../assets/3.jpg'
import Crush from '../assets/4.jpg'
import Drop7 from '../assets/5.jpg'
import Artist from '../assets/6.jpg'
import Artist1 from '../assets/7.jpg'
import Artist2 from '../assets/8.jpg'
import Artist3 from '../assets/9.jpg'
import Artist4 from '../assets/10.jpg'


export type albumsType = {
  name: string;
  image: string;
  type: string;
  spotify: string;
  artist_info: string;
  description: string;
}


export const albums:albumsType[] = [
    {
      name: "Get Lower",
      image: getLower,
      type: "album",
      spotify: "https://open.spotify.com/album/6L3OPsn0P4F6PNUDFGxDVV",
      artist_info: "Steve Aoki",
      description: "The perfect soundtrack to those long nights over dinner"
    },
    {
      name: "Never Be Lonely",
      image: NeverBe,
      type: "album",
      spotify: "https://open.spotify.com/album/1DCiXnF1Z9XX4zxYCFytSX",
      artist_info: "Jax Jones",
      description: "The gentle sound of some of the greatest voices and instrumentalists in Jazz. Your Jazz dinner soundtrack."
    },
    {
      name: "We Can't Stop",
      image: WeCantStop,
      type: "album",
      spotify: "https://open.spotify.com/album/27LVMe5wMsHddairHoCux2",
      artist_info: "AFROJACK",
      description: "Soft electronic music for your dinner."
    },
    {
      name: "crush",
      image: Crush,
      type: "album",
      spotify: "https://open.spotify.com/album/0Tqz0PyiUMHr2HIwvXmyKP",
      artist_info: "Alaina Castillo",
      description: "An uplifting yet tasteful dinner playlist with a guaranteed feel good vibe."
    },
    {
      name: "Drop 7",
      image: Drop7,
      type: "album",
      spotify: "https://open.spotify.com/album/2jK2rbbnrzsId5WWSc67HP",
      artist_info: "Little Simz",
      description: "Soundtrack your cozy dinner with bossa nova jazz."
    },
    {
      name: "Drop 7",
      image: Drop7,
      type: "album",
      spotify: "https://open.spotify.com/album/2jK2rbbnrzsId5WWSc67HP",
      artist_info: "Little Simz",
      description: "Soundtrack your cozy dinner with bossa nova jazz."
    },
    {
      name: "Artists",
      image: Artist,
      type: "song",
      spotify: "https://open.spotify.com/album/2jK2rbbnrzsId5WWSc67HP",
      artist_info: "RoadyGang",
      description: "Soundtrack your cozy dinner with bossa nova jazz."
    },
    {
      name: "Artists vs Tmnt",
      image: Artist1,
      type: "song",
      spotify: "https://open.spotify.com/album/2jK2rbbnrzsId5WWSc67HP",
      artist_info: "RoadyGang",
      description: "Soundtrack your cozy dinner with bossa nova jazz."
    },
    {
      name: "Artists vs Tmnt",
      image: Artist2,
      type: "song",
      spotify: "https://open.spotify.com/album/2jK2rbbnrzsId5WWSc67HP",
      artist_info: "Khyn lyzdh",
      description: "Soundtrack your cozy dinner with bossa nova jazz."
    },
    {
      name: "Artists",
      image: Artist3,
      type: "song",
      spotify: "https://open.spotify.com/album/2jK2rbbnrzsId5WWSc67HP",
      artist_info: "Alicks",
      description: "Soundtrack your cozy dinner with bossa nova jazz."
    },
  ]
