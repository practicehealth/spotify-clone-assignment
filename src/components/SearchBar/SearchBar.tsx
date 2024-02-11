import { useEffect, useRef } from "react";
import { SideNavbarIcons } from "../Icons/SideNavBarIcons";

export default function SearchBar() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    searchRef.current?.focus();
  });
  return (
    <div className="flex items-center w-[350px] border rounded-full py-2 px-3 gap-2 bg-[#242424]">
      {SideNavbarIcons.SEARCH}
      <input
        ref={searchRef}
        type="text"
        placeholder="What do you want to listen to?"
        className="flex-1 outline-none border-none bg-transparent text-white"
      />
    </div>
  );
}
