import { Link } from "react-router-dom";
import GhostButton from "../Buttons/GhostButton";
import { LibraryIcons } from "../Icons/LibraryIcons";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between gap-8 h-full flex-1">
      <div className="flex items-center gap-4 flex-wrap text-[#a7a7a7] text-sm">
        <Link to={"#"}>Legal</Link>
        <Link to={"#"}>Privacy Center</Link>
        <Link to={"#"}>Privacy Policy</Link>
        <Link to={"#"}>Cookies</Link>
        <Link to={"#"}>Aboout Ads</Link>
        <Link to={"#"}>Accessibility</Link>
      </div>
      <GhostButton className="flex items-center gap-2">
        {LibraryIcons.GLOBE}
        English
      </GhostButton>
    </div>
  );
}
