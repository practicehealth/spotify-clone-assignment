import { Genre } from '../types';
import PlayButton from './PlayButton';

interface GenreItemProps {
  data: Genre;
}

const GenreItem: React.FC<GenreItemProps> = ({ data }) => {
  return (
    <div
      className="relative
    group
    flex
    flex-col
    items-center
    justify-center
    rounded-md
    overflow-hidden
    gap-x-4
    cursor-pointer
    transition"
    >
      <a href={'#'} className="cards">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="cards transition duration-300 ease-in-out hover:bg-opacity-75"
        >
          <img src={`/genre/${data.img}.jpeg`} alt="" />
          <span className="px-14 py-4 md:px-14 md:py-4 lg:px-14 xl:px-14 text-base">{data.name}</span>
        </div>
      </a>
      <div
        className="
          absolute
          bottom-4
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default GenreItem;
