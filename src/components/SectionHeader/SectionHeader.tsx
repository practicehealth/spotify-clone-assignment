import SecondaryButton from "../Buttons/SecondaryButton";

type Props = {
  heading: string;
  isShowAll: boolean;
};
export default function SectionHeader({ heading, isShowAll }: Props) {
  return (
    <div className="w-full flex items-center justify-between text-white">
      <h2 className="text-2xl">{heading}</h2>
      {isShowAll && <SecondaryButton>Show all</SecondaryButton>}
    </div>
  );
}
