import { Link } from "react-router-dom";
import CardWrapper from "../Wrappers/CardWrapper";
import { SideNavbarIcons } from "../Icons/SideNavBarIcons";

export default function SideNavbar() {
  return (
    <CardWrapper>
      <div className="flex flex-col gap-6 px-5 py-4">
        <Link to={"/"}>{SideNavbarIcons.LOGO}</Link>
        <div className="flex flex-col gap-6 text-white">
          <Link to={"/"} className="flex items-center gap-6 text-lg">
            {SideNavbarIcons.HOME} Home
          </Link>
          <Link className="flex items-center gap-6 text-lg" to={"/search"}>
            {SideNavbarIcons.SEARCH} Search
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
}
