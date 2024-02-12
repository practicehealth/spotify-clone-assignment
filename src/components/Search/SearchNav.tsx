
export default function SearchNav() { 
    return (
        <div className="flex justify-between items-center px-2 py-4">
            <div className="flex mx-2">
                <img className="h-10 w-10 bg-black cursor-pointer hover:bg-slate-800 p-2 rounded-full mr-2" src="assets/left.svg" alt="Prev" /> 
                <img className="h-10 w-10 bg-black cursor-pointer hover:bg-slate-800 p-2 rounded-full" src="assets/right.svg" alt="Next" />
            </div> 
            <div className="flex-1 group bg-light-black flex items-center mx-4 py-4 px-4 rounded-full">
                <img className="h-5 w-5 mr-2" src="assets/search.svg" alt="Search" />
                <input className="bg-transparent w-full text-xs outline-none" placeholder="What do you want to listen to?" type="text" />
            </div>
            <div className="flex-2 flex items-center">
                <span className="text-slate-400 text-lg font-semibold tracking-widest">Premium Support Download</span>
                <div className="bg-gray-600 h-6 w-[2px] m-5"></div>
                <button className="font-semibold text-slate-400 mr-5 hover:text-white">Signup</button>
                <button className="bg-white text-black rounded-3xl font-semibold py-2 px-4 hover:scale-105">Login</button>
            </div>
        </div>
    )
}
