import { ReactNode } from "react";

type Props={
    children:ReactNode;
    className?:string
}
export default function GhostButton({children,className}:Props) {
  return (
    <button className={`border rounded-full self-start text-white py-2 px-5 ${className}`}>
        {children}
    </button>
  )
}
