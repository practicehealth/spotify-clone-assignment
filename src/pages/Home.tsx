import Heading from "../components/Heading";
import PlaylistCard from "../components/PlaylistCard";
import playlists from "../mocks/playlists.json";

export default function Home() {
    return (
        <div className="w-full bg-gradient">
            <div className="pl-[24px] pr-[16px]">
                <div className="flex flex-col gap-[24px]">
                    <div>
                        <Heading
                            title="Spotify Playlists"
                            withBtn={true}
                            btnText="Show all"
                        />
                        <div className="mt-[4px] flex gap-[24px] flex-wrap">
                            {
                                playlists.general.map((playlist) => (
                                    <PlaylistCard key={playlist.id} playlist={playlist} />
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <Heading
                            title="Sleep"
                            withBtn={false}
                        />
                        <div className="flex gap-[24px] flex-wrap">
                            {
                                playlists.sleep.map((playlist) => (
                                    <PlaylistCard key={playlist.id} playlist={playlist} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}