import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { songs, songType } from "../data/songs";
import "../App.css";

const Card = ({ title, description, image }: songType) => {
  return (
    <div className="h-[260px] w-[180px] bg-[#1a1818] hover:bg-[#232222] rounded-lg cursor-pointer transition-all duration-500 p-4 flex flex-col gap-3 card relative">
      <img src={image} className="w-[150px] h-[160px] block mx-auto" />
      <div className="absolute right-4 play-icon transition-all duration-500">
        <FontAwesomeIcon
          icon={faCirclePlay}
          style={{ color: "#03d100", fontSize: "40px" }}
        />
      </div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-[#999] text-sm font-light">
        {description.substring(0, 35)}...
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="grow bg-gradient-to-b from-[#232323] to-[#111] px-6">
      <h2 className="text-white font-semibold text-2xl mb-4">
        Spotify Playlists
      </h2>
      <div className="flex flex-wrap gap-3">
        {songs.map((song) => {
          return (
            <Card
              key={song.id}
              title={song.title}
              description={song.description}
              image={song.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
