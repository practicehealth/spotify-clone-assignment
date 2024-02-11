import SecondaryButton from "../Buttons/SecondaryButton";
import Footer from "../Footer/Footer";
import HighlightMessageCard from "../HighlightMessageCard/HighlightMessageCard";
import { LibraryIcons } from "../Icons/LibraryIcons";
import CardWrapper from "../Wrappers/CardWrapper";

export default function YourLibrary() {
  return (
    <CardWrapper className="flex flex-col flex-1 overflow-y-scroll">
      <div className="p-3 flex flex-col gap-6">
        <div className="flex items-center gap-2 text-[#a7a7a7] w-full">
          {LibraryIcons.MAIN}
          <h2 className="text-lg">Your Library</h2>
          <SecondaryButton className="ml-auto">
            {LibraryIcons.ADD}
          </SecondaryButton>
        </div>
        <HighlightMessageCard
          buttonText="Create playlist"
          heading="Create your first playlist"
          subHeading="It's easy, we'll help you"
        />
        <HighlightMessageCard
          buttonText="Browse podcasts"
          heading="Let's find someone podcasts yo follow"
          subHeading="We'll keep you updated on new episodes"
        />
        <Footer />
      </div>
    </CardWrapper>
  );
}
