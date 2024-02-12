
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import artists from "../../data/Data.json";

const Center = () => {
  const allArtists = [...artists.artists.slice(0, 5), ...artists.artists.slice(5, 7)];

  return (
    <div>
      <div className="flex justify-between items-start">
        <div className="flex">
          <NavigateBeforeOutlinedIcon sx={{ fontSize: 24, color: "white" }} />
          <NavigateNextOutlinedIcon sx={{ fontSize: 24, color: "white" }} />
        </div>
        <div className="flex mr-2">
          <button className="text-gray-400 px-4 py-2 my-6 rounded-full font-bold mr-2 transition-all duration-300 hover:text-white hover:font-bold hover:scale-110 cursor-pointer">Sign up</button>
          <button className="bg-white text-black px-4 py-2 my-6 rounded-full font-bold transition-all duration-300 hover:text-white hover:font-bold hover:scale-110 cursor-pointer">Log in</button>
        </div>
      </div>
      <h2 className="text-white font-bold text-lg ml-3">Spotify Playlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-3 bg-zinc-900">
        {allArtists.map((artist) => (
          <div key={artist.id} className="flex flex-col items-center">
            <img src={artist.image} alt={artist.name} className="w-full h-40 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
            <p className="text-white">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Center;
