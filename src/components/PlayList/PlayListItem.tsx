interface PlayListItemProps {
    name: string;
    description: string;
    image: string;
}

function PlayListItem({name, description, image}: PlayListItemProps){
    return (
        <div className="bg-neutral-800 hover:bg-neutral-700 p-3 flex flex-col gap-3 cursor-pointer rounded-lg">
            <div className="cover">
                <img src={image} alt="" className="w-full h-full rounded"/>
            </div>
            <div className="font-semibold">{name}</div>
            <div className="text-neutral-400 text-sm line-clamp-2">{description}</div>
        </div>
    )
}

export default PlayListItem