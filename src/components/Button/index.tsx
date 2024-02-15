import { twMerge } from "tailwind-merge"

type ButtonType={
    children:React.ReactNode,
    onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined,
    className:string | undefined
}


function index({children,className="",onClick}:ButtonType) {
  return (
    <button className={twMerge("bg-white rounded-lg p-4 overflow-x-hidden whitespace-nowrap max-w-[fit-content] hover:scale-105 transition-transform",className)} onClick={onClick}>{children}</button>
  )
}

export default index