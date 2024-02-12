
interface CategoryProps {
    catgeory: {
        id: number,
        name: string,
        image: string,
        href: string,
        color: string
    },
}
export default function CategoryCard({ catgeory }: CategoryProps) {
    return (
        <div style={{ backgroundColor: `${catgeory.color}` }} className={`relative z-40 h-[195px] rounded-[8px] overflow-hidden`}>
            <div className="p-[16px]">
                <p className="text-[1.5rem] font-bold">{catgeory.name}</p>
            </div>
            <img
                className="absolute bottom-0 right-0 overflow-hidden shadow w-[100px] h-[100px] rotate-img-180"
                src={catgeory.image}
                alt={catgeory.name}
            />
        </div>
    )
}