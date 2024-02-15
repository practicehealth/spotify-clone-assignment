import React from 'react'
import { Link } from 'react-router-dom'
// import { IconType } from 'react-icons'

interface MenuItemProps {
    icon: React.ReactNode
    text: string,
    className?: string,
    href: string,
    selected : boolean
}
export default function MenuItem({ icon, text, className , href , selected}: MenuItemProps) {
    return (
        <Link to={href}>
            <div className='flex items-center gap-[20px] h-[40px]'>
                <div>{icon}</div>
                <p className={`${selected ? 'text-white' : 'text-spotify-text-muted'} text-base font-700 ${className}`}>{text}</p>
            </div>
        </Link>
    )
}