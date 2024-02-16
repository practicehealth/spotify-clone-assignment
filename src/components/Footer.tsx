import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 text-white mt-16 mb-6">
        <div>
          <p className="text-l font-bold">Company</p>
          <p className="text-[#616161]">About</p>
          <p className="text-[#616161]">Jobs</p>
          <p className="text-[#616161]">For the Record</p>
        </div>
        <div>
          {" "}
          <p className="text-l font-bold">Communities</p>
          <p className="text-[#616161]">For Artists</p>
          <p className="text-[#616161]">Developers</p>
          <p className="text-[#616161]">Advertising</p>
          <p className="text-[#616161]">Investors</p>
          <p className="text-[#616161]">Vendors</p>
        </div>
        <div>
          {" "}
          <p className="text-l font-bold">Useful links</p>
          <p className="text-[#616161]">Support</p>
          <p className="text-[#616161]">Free Mobile App</p>
        </div>
        <div className="col-span-2 justify-self-end">
          <div className="flex">
            <FaInstagram size={30} className="m-5" />
            <FaTwitter size={30} className="m-5" />
            <FaFacebook size={30} className="m-5" />
          </div>
        </div>
      </div>
      <hr />
      <p className="text-[#5e5e5e]  my-14 ps-10">© 2024 Spotify AB </p>
    </>
  );
};

export default Footer;
