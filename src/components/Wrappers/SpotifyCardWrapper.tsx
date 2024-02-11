import { ReactNode } from "react";

export default function SpotifyCardWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-md bg-[#161616] ${className}`}>{children}</div>
  );
}
