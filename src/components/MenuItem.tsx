import React from 'react'
// import { IconType } from 'react-icons'

interface MenuItemProps {
    icon : React.ReactNode
    text : string,
    className?: string
}
export default function MenuItem({icon , text , className}: MenuItemProps) {
    return (
        <div className='flex items-center gap-[20px] h-[40px]'>
            <div>{icon}</div>
            <p className={`text-white text-base font-700 ${className}`}>{text}</p>
        </div>
    )
}