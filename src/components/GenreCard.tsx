const GenreCard = ({ imgUrl, title }: any) => {
  return (
    <div className="rounded-md w-[180px] h-[180px] overflow-hidden relative">
      <img
        src={imgUrl}
        alt=""
        className="cursor-pointer object-cover absolute top-0 left-0 w-full h-full"
      />
      <p className="text-white font-bold text-2xl  absolute top-2 left-4 z-15 ">
        {title}
      </p>
    </div>
  );
};

export default GenreCard;
