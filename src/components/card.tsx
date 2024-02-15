export default function Card () {
    return (
        <div className="flex flex-col gap-2 p-4 bg-[#242424] rounded-lg">
            <h1 className="font-semibold">Create your first playlist</h1>
            <p className="text-sm">It's easy, we'll help you</p>
            <button className="bg-white text-black rounded-3xl w-32 px-2 py-1 font-semibold">
                Create playlist
            </button>
        </div>
    )
}