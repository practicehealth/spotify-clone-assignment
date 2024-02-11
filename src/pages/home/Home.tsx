import Section from "../../components/Section/Section";

type SectionData = {
  sectionHeading: string;
  isShowAll: boolean;
  playlist: {
    image: string;
    heading: string;
    subHeading: string;
  }[];
}[];

const sectionData: SectionData = [
  {
    sectionHeading: "Spotify Playlists",
    isShowAll: true,
    playlist: [
      {
        heading: "lofi beats",
        subHeading: "chill beats, lofi vibes, new tracks every week",
        image:
          "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
      },
      {
        heading: "Today's Top Hits",
        subHeading: "Benson Boone is on top of the Hottest 50!",
        image:
          "https://i.scdn.co/image/ab67706f00000002af29338e415c87776e74a574",
      },
      {
        heading: "Chillout Lounge",
        subHeading: "Just lean back and enjoy relaxed beats.",
        image:
          "https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d",
      },
      {
        heading: "All Out 2020s",
        subHeading: "The biggest songs of the 2020s.",
        image:
          "https://i.scdn.co/image/ab67706f00000002d771dc645afe9b87978b1d3e",
      },
    ],
  },
  {
    sectionHeading: "Sleep",
    isShowAll: false,
    playlist: [
      {
        heading: "Stress Relief",
        image:
          "https://i.scdn.co/image/ab67706f00000002468762ec9fd93a2dc3b167ee",
        subHeading:
          "Calm your mind from anxiety with gentle piano and ambient music.",
      },
      {
        heading: "Peaceful Piano",
        image:
          "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
        subHeading:
          "Peaceful piano to help you slow down, breathe, and relax. ",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="py-3 px-5 flex flex-col gap-10">
      {sectionData.map((section, index) => (
        <Section
          key={index}
          sectionHeading={section.sectionHeading}
          isShowBtn={section.isShowAll}
          cardData={section.playlist}
        />
      ))}
    </div>
  );
}
