import { useState } from "react";
import { FaPlay } from "react-icons/fa";
const SongCard = ({ imgUrl, type, desc }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="text-white bg-[#181818] hover:bg-[#242424] rounded-md w-[180px] h-[250px] p-4 cursor-pointer ">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imgUrl}
          alt=""
          className="rounded-md h-[150px] w-[150px] mb-2 object-cover top-0 left-0"
        />
        {isHovered && (
          <button className="rounded-full bg-green-500 p-4 absolute bottom-2 right-2 z-10 animate-fade-up">
            <FaPlay className="text-black" />
          </button>
        )}
      </div>
      <p className="font-bold">{type}</p>
      <p className="text-sm text-[#b3b3b3]">{desc}</p>
    </div>
  );
};

export default SongCard;
