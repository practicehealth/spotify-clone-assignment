import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
export default function GradientWrapper({ children, className }: Props) {
  return (
    <div
      className={`bg-gradient-to-tl from-[#121212] to-[#1f1f1f] ${className}`}
    >
      {children}
    </div>
  );
}
