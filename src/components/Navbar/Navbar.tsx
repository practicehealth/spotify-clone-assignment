import { useLocation } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import { NavbarIcons } from "../Icons/NavbarIcon";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="flex items-center gap-4 h-[60px] px-5">
      <div className="flex items-center gap-2 text-white">
        <div className="h-8 w-8 bg-black border-transparent border-solid border rounded-full flex items-center justify-center hover:border-white">
          {NavbarIcons.LEFTARROW}
        </div>
        <div className="h-8 w-8 bg-black border-transparent rounded-full border border-solid flex items-center justify-center hover:border-white">
          {NavbarIcons.RIGHTARROW}
        </div>
      </div>
      {location.pathname === "/search" && <SearchBar />}
      <div className="flex items-center gap-3 ml-auto">
        <SecondaryButton>Sign up</SecondaryButton>
        <PrimaryButton>Log in</PrimaryButton>
      </div>
    </div>
  );
}
