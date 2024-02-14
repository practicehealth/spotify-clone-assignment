import Layout from "../layouts/Layout";
import { albums } from "../data";
import SongCardParent from "../components/ui/SongCardParent";


const Home = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <SongCardParent gradient songs={albums} title="Spotify Playlists" />
        <SongCardParent songs={albums.slice(0, 2)} title="Sleep" />
      </div>
    </Layout>
  );
};

export default Home;
