import React from "react";
import Layout from "../layouts/Layout";
import Navbar from "./Navbar/Navbar";
import Card from "./ui/Card";
import SongCard from "./ui/SongCard";
import { albums, albumsType } from "../data";
import SongCardParent from "./ui/SongCardParent";

type Props = {};

const Home = (props: Props) => {
  return (
    <Layout>
      <Card className="w-full py-4">
        <div className="px-6">
          <Navbar />
        </div>
        <div>
          <SongCardParent gradient songs={albums} title="Spotify Playlists" />
          <SongCardParent songs={albums.slice(0,2)} title="Sleep" />
        </div>
      </Card>
    </Layout>
  );
};

export default Home;
