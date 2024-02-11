import { ReactNode } from "react";

export default function CardWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-md bg-[#121212] ${className}`}>{children}</div>
  );
}
