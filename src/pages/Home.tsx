import Footer from "../components/Footer";
import SongCard from "../components/SongCard";
import { songTypes } from "../data";

const Home = () => {
  return (
    <div className="h-[805px] overflow-y-scroll bg-gradient-to-b from-[#1E1E1E] to-[#121212] w-full rounded-b-lg">
      <h2 className="text-2xl text-white font-bold px-6">Spotify Playlists</h2>
      <section className="p-4 flex gap-4 flex-wrap items-center justify-evenly">
        {songTypes.map((item) => (
          <SongCard
            key={item.title}
            imgUrl={item.imageUrl}
            type={item.title}
            desc={item.description}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
