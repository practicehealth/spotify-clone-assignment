import { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Playlist = () => {
  const CLIENT_ID = "fa32cecbc87e451e971be932bc7fc87c";
  const CLIENT_SECRET = "42e99c7f9ab34f62bc515686619659a5";

  const [trackInfo, setTrackInfo] = useState([]);

  useEffect(() => {
    const getAccessToken = async () => {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        null,
        {
          params: {
            grant_type: "client_credentials",
          },
          auth: {
            username: CLIENT_ID,
            password: CLIENT_SECRET,
          },
        }
      );

      return response.data.access_token;
    };

    const getTrackInfo = async (trackIds, accessToken) => {
      const response = await axios.get(`https://api.spotify.com/v1/tracks`, {
        params: {
          ids: trackIds.join(","),
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setTrackInfo(response.data.tracks);
    };

    const fetchData = async () => {
      const accessToken = await getAccessToken();
      const trackIds = [
        "6rqhFgbbKwnb9MLmUQDhG6",
        "5Z0rW6ZkwoGPZ6HncDWY6d",
        "1xQ6trAsedVPCdbtDAmk0c",
        "4npEfmQ6YuiwW1GpUmaq3F",
        "0t3ZvGKlmYmVsDzBJAXK8C",
        "4H7WNRErfs5bq6nkwExI2l",
        "4iJyoBOLtHqaGxP12qzhQI",
        "2dpaYNEQHiRxtZbfNsse99",
        "3n3Ppam7vgaVa1iaRUc9Lp",
      ];
      await getTrackInfo(trackIds, accessToken);
    };

    fetchData();
  }, []);
  return (
    <Fragment>
      <div className="flex flex-wrap">
        {trackInfo.map((track) => (
          <div key={track?.id}>
            {track ? (
              <div className="grid-cols-1 cursor-pointer gap-4 p-4 bg-[#181818] hover:bg-[#242424] w-[13rem] m-5 border rounded-xl border-transparent">
                <div className="mb-3">
                  <img
                    src={track.album?.images[0]?.url}
                    alt=""
                    className=" border rounded-xl border-transparent"
                  />
                </div>
                <div>
                  <h1 className=" text-white font-bold mb-1">{track.name}</h1>
                  <p className=" text-[#9c9c9c] text-sm font-semibold mb-3">
                    {track.artists[0]?.name}
                  </p>
                </div>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Playlist;
