import { ReactNode } from "react";

export default function HighlightCardWrapper({children}:{children:ReactNode}) {
  return (
    <div className="rounded-md bg-[#242424] p-5">
        {children}
    </div>
  )
}
