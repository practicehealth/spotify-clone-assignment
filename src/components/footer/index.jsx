import React from "react";
import FooterLink from "./FooterLink";
import { footerData } from "../../constant/footer";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-8 flex flex-wrap gap-5 mt-20 relative">
      <FooterLink {...footerData[0]} />
      <FooterLink {...footerData[1]} />
      <FooterLink {...footerData[2]} />

      <div className="absolute -bottom-16 lg:bottom-28 right-5 flex gap-3 text-lg">
        <Link className="bg-[#292929] rounded-full p-3" to="#instagram">
          <FaInstagram />
        </Link>
        <Link className="bg-[#292929] rounded-full p-3" to="#twitter">
          <FaTwitter />
        </Link>
        <Link className="bg-[#292929] rounded-full p-3" to="#facebook">
          <FaFacebook />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
