import PrimaryButton from "../Buttons/PrimaryButton";
import HighlightCardWrapper from "../Wrappers/HighlightCardWrapper";

type Props = {
  heading: string;
  subHeading: string;
  buttonText: string;
};
export default function HighlightMessageCard({
  heading,
  buttonText,
  subHeading,
}: Props) {
  return (
    <HighlightCardWrapper>
      <div className="flex flex-col gap-2 text-white">
        <h2 className="text-lg">{heading}</h2>
        <p className="mb-3 text-sm">{subHeading}</p>
        <PrimaryButton>{buttonText}</PrimaryButton>
      </div>
    </HighlightCardWrapper>
  );
}
