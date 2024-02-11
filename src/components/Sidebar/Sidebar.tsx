import SideNavbar from "../SideNavbar/SideNavbar";
import YourLibrary from "../YourLibrary/YourLibrary";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-2 h-full">
      <SideNavbar />
      <YourLibrary />
    </div>
  );
}
