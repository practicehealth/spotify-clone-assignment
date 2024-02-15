import { twMerge } from "tailwind-merge"

type CardType={
    children:React.ReactNode,
    className?:string | undefined
}


function index({children,className=""}:CardType) {
  return (
    <div className={twMerge("bg-[var(--bg-base)] rounded-md shadow",className)}>{children}</div>
  )
}

export default index