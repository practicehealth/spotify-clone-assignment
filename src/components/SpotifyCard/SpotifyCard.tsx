import SpotifyCardWrapper from "../Wrappers/SpotifyCardWrapper";

type Props = {
  image: string;
  heading: string;
  subHeading: string;
};

export default function SpotifyCard({ heading, image, subHeading }: Props) {
  return (
    <SpotifyCardWrapper className="p-5 flex flex-col gap-2 cursor-pointer">
      <img src={image} alt="spotify music" className="w-full rounded-md" />
      <h2 className="text-lg text-white">{heading}</h2>
      <p className="text-base text-[#a7a7a7]">{subHeading}</p>
    </SpotifyCardWrapper>
  );
}
