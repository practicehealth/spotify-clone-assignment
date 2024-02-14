import songs from "../../data/songs";

const ArtistSection = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 place-items-center gap-2">
       { songs.map((item) => (
        <div className="  bg-slate-300 bg-opacity-20 w-fit flex flex-col gap-2 p-2 rounded-lg">
          <div className=" w-25">
            <img
              className="  w-[200px] 2xl:w-25 rounded-full"
              src={ item.image}
              alt="img"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <div className=" font-bold text-xl">{ item.title }</div>
            <div className=" text-xs text-slate-300 font-semibold">Artist</div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
