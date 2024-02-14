import React from "react";
import PlayButton from "./PlayerButton";
import { cn } from "../../utils";

type Props = {
  className: string;
  children: React.ReactNode;
};

const SongCardWrapper = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center p-3 overflow-hidden transition cursor-pointer rounded-2xl group gap-x-4 bg-neutral-400/5 hover:bg-neutral-400/10",
        className
      )}
    >
      {children}
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongCardWrapper;
