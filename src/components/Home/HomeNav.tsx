
export default function HomeNav() { 
    return (
        <div className="flex justify-between items-center px-2 py-4">
            <div className="flex mx-2">
                <img className="h-10 w-10 bg-black cursor-pointer hover:bg-slate-800 p-2 rounded-full mr-2" src="assets/left.svg" alt="Prev" /> 
                <img className="h-10 w-10 bg-black cursor-pointer hover:bg-slate-800 p-2 rounded-full" src="assets/right.svg" alt="Next" />
            </div> 
            <div className="flex items-center">
                <span className="text-slate-400 text-lg font-semibold ">Premium Support Download</span>
                <div className="bg-gray-600 h-6 w-[2px] m-5"></div>
                <button className="font-semibold text-slate-400 mr-5 hover:text-white">Signup</button>
                <button className="bg-white text-black rounded-3xl font-semibold py-2 px-4 hover:scale-105">Login</button>
            </div>
        </div>
    )
}
