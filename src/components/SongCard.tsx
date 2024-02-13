const SongCard = ({ imgUrl, type, desc }: any) => {
  return (
    <div className="text-white bg-[#181818] hover:bg-[#242424] rounded-md w-[180px] h-[250px] p-4 cursor-pointer ">
      <img
        src={imgUrl}
        alt=""
        className="rounded-md h-[150px] w-[150px] mb-2 object-cover"
      />
      <p className="font-bold">{type}</p>
      <p className="text-sm text-[#b3b3b3]">{desc}</p>
    </div>
  );
};

export default SongCard;
