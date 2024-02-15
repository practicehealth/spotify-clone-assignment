export default function PodcastComponent() {
    return (
        <div className="flex flex-col my-4 p-4 rounded-lg bg-light-black">
            <span className="text-white font-semibold">Let's find some podcasts to follow</span>
            <span className="text-slate-100 text-xs font-semibold my-2">We will keep you updated on new episodes</span>
            <button className="rounded-3xl bg-white text-sm text-black mt-4 py-2 px-4 w-fit font-semibold hover:scale-105">Browse Podcasts</button>
        </div>
    )
}
