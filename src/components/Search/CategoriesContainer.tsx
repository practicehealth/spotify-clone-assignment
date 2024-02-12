const filters = ["All", "Songs", "Artists", "Playlists", "Albums", "Podcasts & Shows"]

export default function CategoriesContainer() { 

    return ( 
        <div className="">
            <div className="flex flex-wrap mx-3"> 
                {
                    filters.map((filter, idx) => { 
                        return (
                        <span key={idx} className="rounded-full p-2 px-4 bg-light-black text-white mr-4 cursor-pointer hover:bg-white hover:text-black">
                           {filter} 
                        </span>
                        ) 
                    })
                }
            </div> 
        </div>
    )
}
