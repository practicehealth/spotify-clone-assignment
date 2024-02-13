import React from "react";
import { cn } from "../../utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: Props) => {
  return (
    <div className={cn("bg-primary w-full p-2 rounded-lg", className)}>
      {children}
    </div>
  );
};

export default Card;
