import { Artist } from '../types';
import PlayButton from './PlayButton';

interface ArtistCardProps {
  data: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ data }) => {
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
          aspect-
          w-full
          h-full
          rounded-md
          overflow-hidden
        "
      >
        <img className="object-cover rounded-full p-2" src={data.image} alt="Image" />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.name}</p>
        <p
          className="
            text-neutral-400
            text-sm
            pb-4
            w-full
            truncate
          "
        >
          Artist
        </p>
      </div>
      <div
        className="
          absolute
          bottom-24
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default ArtistCard;
