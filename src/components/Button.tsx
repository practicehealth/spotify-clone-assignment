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
                items-center
                gap-2
                py-2 
                px-4 
                rounded-full
                font-bold
                ${variant === 'contained' ? 'bg-white text-black' : ''}
                ${variant === 'outlined' ? 'bg-transparent text-white border' : ''}
                ${variant === 'link' ? 'bg-transparent text-spotify-disabled' : ''}
                ${size === 'small' ? 'text-sm py-1 px-4' : ''}
                ${size === 'medium' ? 'text-base py-2 px-6' : ''}
                ${size === 'large' ? 'text-md py-3 px-8' : ''}
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