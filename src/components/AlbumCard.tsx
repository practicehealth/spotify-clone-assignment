import { Album } from '../types';
import PlayButton from './PlayButton';

interface AlbumItemProps {
  data: Album;
}

const AlbumCard: React.FC<AlbumItemProps> = ({ data }) => {
  return (
    <div
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3
      "
    >
      <div
        className="
          relative
          aspect-square
          w-full
          h-full
          rounded-md
          overflow-hidden
        "
      >
        <img className="object-cover" src={data.cover} alt="Image" />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.name}</p>
      </div>
      <div
        className="
          absolute
          bottom-14
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default AlbumCard;
