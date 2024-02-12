interface HeadingProps {
    title: string,
    btnText?: string,
    withBtn? : boolean
}

export default function Heading({ title, btnText , withBtn } : HeadingProps) {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{title}</h2>
            {withBtn && <button className="text-spotify-text-muted text-sm">{btnText}</button>}
        </div>
    )
}