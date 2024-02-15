import dataJSON from "../../../data.json";

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
            <div className="p-4">
                <span className="text-xl text-white font-semibold">
                    Browse All
                </span>
                <div className="flex flex-wrap my-3">
                    {
                        dataJSON['Categories'].map((data, idx)=>{ 
                            return (
                            <div key={idx} style={{backgroundColor:data.color}} className={`w-[12rem] h-[12rem] flex flex-col m-2 px-4 py-3 overflow-hidden rounded-lg mr-5`}>
                                <span className="font-semibold text-xl w-fit">{data.title}</span>
                                <img className="relative bottom-0 p-4 right-0 h-30 w-30 rotate-[25deg] translate-x-12 translate-y-6" src="assets/sleep-1.jpeg" alt="Category" />
                            </div>
                            )
                        })
                    } 
                </div>
            </div>
        </div>
    )
}
