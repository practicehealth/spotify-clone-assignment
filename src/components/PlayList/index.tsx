import PlayListItem from "./PlayListItem"

interface PlayListProps {
    data: PlayListItemProps[]
}

interface PlayListItemProps {
    name: string;
    description: string;
    image: string;
}
function PlayList({data}: PlayListProps){
    return (
        <div className="playlist grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.map((item, index) => <PlayListItem key={index} name={item.name} description={item.description} image={item.image}/>)}
        </div>
        
    )
}

export default PlayList