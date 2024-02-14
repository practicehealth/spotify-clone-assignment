import songs from "../../data/songs";

export const SongList = () => {
  console.log(songs);
  return (
    <div className=" bg-black text-white w-full ">
      <div className=" flex flex-col gap-1 py-1 px-4">
        {songs.slice(0, 4).map((item) => (
          <div className="  flex justify-between w-full px-1 items-center">
            <div className="flex items-center justify-start gap-2">
            <div className=" w-fit h-fit p-1 bg-white rounded-md">
              <img
                className="w-10 h-10 rounded-sm"
                src={ item.image}
                alt="img"
              />
            </div>
            <div>
              <div>{item.title}</div>
              <div className=" text-xs text-slate-300">{ item.description}</div>
            </div>
            </div>
            <div className=" text-sm text-slate-400">
                01:10
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
