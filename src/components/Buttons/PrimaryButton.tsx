import { ReactNode } from "react"

type Props={
    children:ReactNode;
    className?:string
}
export default function PrimaryButton({children,className}:Props) {
  return (
    <button className={`rounded-full py-2 px-5 font-semibold bg-white text-[#121212] self-start ${className}`}>
        {children}
    </button>
  )
}
