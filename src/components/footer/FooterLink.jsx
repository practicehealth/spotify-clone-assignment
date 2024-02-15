import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({ title, links }) => {
  return (
    <div className="flex flex-col w-44">
      <p className="text-lg">{title}</p>
      {links.map((link) => (
        <Link
          to={`/${link}`}
          key={link}
          className="text-[#a7a7a7] capitalize hover:text-white"
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default FooterLink;
