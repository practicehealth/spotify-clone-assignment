
interface Props{
    title: string;
    bgColor: string;
    id: string;
    imgUrl: string;
}

function BrowseCard({ title, bgColor, imgUrl }: Props) {
    return (
        <div className={`rounded-lg relative overflow-hidden w-[183px] h-[183px] cursor-pointer`} style={{ backgroundColor: bgColor }}>
            <div className="p-4 w-full overflow-hidden">
                <h4 className='text-white font-bold text-2xl max-w-full breakWord'>{title}</h4>
            </div>
            <div className="w-[100px] absolute rotate-25 -bottom-[14px] -right-[10px]">
                <img className=' h-full w-full object-cover' src={imgUrl}></img>
            </div>
        </div>
    )
}

export default BrowseCard