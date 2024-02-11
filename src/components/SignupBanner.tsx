
export default function SignupBanner() { 
    return (
        <div className="flex justify-between bg-blue-700 p-4 ">
            <div className="flex flex-col">
                <span className="text-xs font-semibold">Preview of Spotify</span>
                <span className="font-semibold">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</span>
            </div> 
            <button className="bg-white text-black rounded-3xl font-semibold py-4 px-7 hover:scale-105">Sign up for free</button>
        </div>
    )
}
