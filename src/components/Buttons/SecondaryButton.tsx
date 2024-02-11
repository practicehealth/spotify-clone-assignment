import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
export default function SecondaryButton({ children, className }: Props) {
  return (
    <button className={`py-2 px-5 text-[#a7a7a7] ${className}`}>
      {children}
    </button>
  );
}
