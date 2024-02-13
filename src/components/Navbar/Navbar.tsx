import React from "react";
import { Button } from "../ui/Button";
import { MdArrowBackIos, MdArrowForwardIos, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex text-xl font-normal gap-x-6 text-secondary">
        <MdArrowBackIos className="cursor-not-allowed" />
        <MdArrowForwardIos className="cursor-not-allowed" />
      </div>
      <div>
        <Button variant={"link"} size={"lg"}>Sign up</Button>
        <Button size={"lg"}>Log in</Button>
      </div>
    </div>
  );
};

export default Navbar;
