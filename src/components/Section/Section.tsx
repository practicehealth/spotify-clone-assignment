import SectionHeader from "../SectionHeader/SectionHeader";
import SpotifyCard from "../SpotifyCard/SpotifyCard";

type Props = {
  sectionHeading: string;
  isShowBtn: boolean;
  cardData: {
    image: string;
    heading: string;
    subHeading: string;
  }[];
};
export default function Section({
  sectionHeading,
  isShowBtn,
  cardData,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader heading={sectionHeading} isShowAll={isShowBtn} />
      <div className="grid grid-cols-4 gap-x-4">
        {cardData.map((playlist, index) => (
          <SpotifyCard
            key={index}
            heading={playlist.heading}
            image={playlist.image}
            subHeading={playlist.subHeading}
          />
        ))}
      </div>
    </div>
  );
}
