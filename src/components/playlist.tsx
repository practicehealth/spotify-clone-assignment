

export default function Playlist() {
    return (
        <div className="p-4 text-white bg-[#1e1e1e] rounded flex flex-col">
            <h1 className="font-bold text-2xl">Spotify Plalist</h1>


            <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-52" src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                </div>
            </div>

        </div>
    )
}