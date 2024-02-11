type Props = {
  heading: string;
  image: string;
  colorOfCard: string;
};
export default function SearchCard({ colorOfCard, heading, image }: Props) {
  return (
    <div
      style={{ backgroundColor: colorOfCard }}
      className="h-[200px] rounded-md overflow-hidden relative p-3 cursor-pointer"
    >
      <h2 className="text-xl font-bold text-white">{heading}</h2>
      <img
        src={image}
        alt="image of music"
        className="absolute bottom-0 right-0 w-[100px] rotate-[20deg] translate-x-3 translate-y-2"
      />
    </div>
  );
}
