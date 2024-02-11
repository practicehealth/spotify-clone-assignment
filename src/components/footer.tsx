import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <nav className="flex gap-11 justify-between items-center text-[#a7a7a7] bg-[#1e1e1e] p-4 pt-24">
      <div className="flex justify-between gap-14 items-start">
      <ul className="flex flex-col gap-2">
        <p className="text-white font-bold">Company</p>
        <a href="#" role="link">
          About
        </a>
        <a href="#" role="link">
        Jobs
        </a>
        <a href="#" role="link">
        For the Record
        </a>
      </ul>
      <ul className="flex flex-col gap-2">
        <p className="text-white font-bold">Communities</p>
        <a href="#" role="link">
        for Artists
        </a>
        <a href="#" role="link">
        Developers
        </a>
        <a href="#" role="link">
        Advertising
        </a>
        <a href="#" role="link">
        Investors
        </a>
        <a href="#" role="link">
        Vendors
        </a>
      </ul>
      <ul className="flex flex-col gap-2">
      <p className="text-white font-bold">Communities</p>
        <a href="#" role="link">
        Useful links
        </a>
        <a href="#" role="link">
        Support
        </a>
        <a href="#" role="link">
        Free Mobile App
        </a>
      </ul>
      </div>
      <div className="flex gap-4 ">
        <a href="#" className="bg-[#302f2f] hover:bg-[#3a3939] w-9 h-9 flex justify-center items-center rounded-full">
        <FaInstagram className="w-4 h-4 text-white"/>
        </a>
        <a href="#" className="bg-[#302f2f] hover:bg-[#3a3939] w-9 h-9  flex justify-center items-center rounded-full" >
        <FaTwitter className="w-4 h-4 text-white"/>
        </a>
        <a href="#" className="bg-[#302f2f] hover:bg-[#3a3939] w-9 h-9  flex justify-center items-center rounded-full">
        <FaFacebook className="w-4 h-4 text-white"/>
        </a>
      </div>
    </nav>
  );
}
