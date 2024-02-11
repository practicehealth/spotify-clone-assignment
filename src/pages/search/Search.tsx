import SearchCard from "../../components/SearchCard/SearchCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

type SearchData = {
  heading: string;
  image: string;
  colorOfcard: string;
}[];

const searchData: SearchData = [
  {
    colorOfcard: "rgb(0, 100, 80)",
    heading: "Podcasts",
    image: "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa",
  },
  {
    colorOfcard: "rgb(132, 0, 231)",
    heading: "Live Events",
    image:
      "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
  },
  {
    colorOfcard: "rgb(30, 50, 100)",
    heading: "Made for you",
    image: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
  },
  {
    colorOfcard: "rgb(232, 17, 91)",
    heading: "New Releases",
    image: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    colorOfcard: "rgb(220, 20, 140)",
    heading: "Hindi",
    image: "https://i.scdn.co/image/ab67fb8200005caff5976b97bcf10d98acbae2cd",
  },
  {
    colorOfcard: "rgb(176, 40, 151)",
    heading: "Punjabi",
    image: "https://i.scdn.co/image/ab67706f00000002461fda205f5f952eff8bae70",
  },
  {
    colorOfcard: "rgb(165, 103, 82)",
    heading: "Tamil",
    image: "https://i.scdn.co/image/ab67fb8200005caf4b3beede484da74b233fa299",
  },
  {
    colorOfcard: "rgb(119, 119, 119)",
    heading: "Ghazals",
    image: "https://i.scdn.co/image/ab67fb8200005caf666a4ae3e6161da7a120ca14",
  },
  {
    colorOfcard: "rgb(13, 115, 236)",
    heading: "Podcasts charts",
    image: "https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",
  },
  {
    colorOfcard: "rgb(142, 102, 172)",
    heading: "Podcats New Realeases",
    image: "https://t.scdn.co/images/209c867f5bb34076b0dcc9deeb1868e6",
  },
  {
    colorOfcard: "rgb(225, 51, 0)",
    heading: "Video Podcasts",
    image: "https://i.scdn.co/image/9af79fd06e34dea3cd27c4e1cd6ec7343ce20af4",
  },
  {
    colorOfcard: "rgb(119, 119, 119)",
    heading: "Business & Technology",
    image: "https://i.scdn.co/image/e227cd9674618024276c65f1213fb05af34cf512",
  },
  {
    colorOfcard: "rgb(20, 138, 8)",
    heading: "Pop",
    image: "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
  },
];

export default function Search() {
  return (
    <div className="p-5 flex flex-col gap-3">
      <SectionHeader heading="Browse all" isShowAll={false} />
      <div className="grid grid-cols-5 gap-5">
        {searchData.map((card, index) => (
          <SearchCard
            key={index}
            colorOfCard={card.colorOfcard}
            heading={card.heading}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}
