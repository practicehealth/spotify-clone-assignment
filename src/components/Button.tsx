import { useNavigate } from 'react-router-dom'

interface ButtonProps {
    size: 'small' | 'medium' | 'large',
    onClick?: () => void,
    children: React.ReactNode
    variant: 'outlined' | 'contained' | 'link',
    className?: string,
    href?: string,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode
}
export default function Button({ size, variant, onClick, children, className, href, startIcon, endIcon }: ButtonProps) {
    const navigate = useNavigate();
    const navigateTo = (href: string): void => {
        navigate(href);
    }
    return (
        <button
            onClick={
                variant === 'link' ? () => navigateTo(href ? href : '') : onClick
            }
            className={`
                flex
                text-base
                items-center
                gap-2
                py-2 
                px-4
                font-bold 
                cursor-pointer
                text-center
                rounded-full
                duration-300
                :hover-scale-110
                ${variant === 'contained' ? 'bg-white text-black' : ''}
                ${variant === 'outlined' ? 'bg-transparent text-white border' : ''}
                ${variant === 'link' ? 'bg-transparent text-spotify-disabled' : ''}
                ${size === 'small' ? 'py-[8px] text-sm px-[18px]' : ''}
                ${size === 'medium' ? 'py-[12px] px-[32px]' : ''}
                ${size === 'large' ? 'py-3 px-8' : ''}
                border-white
                ${className}
            `}
        >
            {startIcon && <span className='mr-2'>{startIcon}</span>}
            {children}
            {endIcon && <span className='ml-2'>{endIcon}</span>}
        </button>
    )
}