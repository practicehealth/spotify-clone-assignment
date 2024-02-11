
const playlistData = [
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Podcasts",
    bgColor: "#006450",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481",
    title: "Live Events",
    bgColor: "#8400e7",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000027cd703bbfec2f1e86c879bec",
    title: "Made For You",
    bgColor: "#1e3264",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "New Releases",
    bgColor: "#e8115b",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Hindi",
    bgColor: "#8400e7",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481",
    title: "Punjabi",
    bgColor: "#e13300",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Tamil",
    bgColor: "#006450",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Ghazals",
    bgColor: "#006450",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481",
    title: "Podcast Charts",
    bgColor: "#006450",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Podcast New Releases",
    bgColor: "#8400e7",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Podcast New Releases",
    bgColor: "#8400e7",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Podcast New Releases",
    bgColor: "#8400e7",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Podcast New Releases",
    bgColor: "#8400e7",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
];
export default function BrowseAll() {
  return (
    <div className="p-4 text-white bg-[#1e1e1e] rounded flex flex-col pt-16">
      <h1 className="font-bold text-2xl">Browse all</h1>

      <div className="grid grid-cols-5 grid-auto-rows-auto gap-4">
        {playlistData.map((item, index) => (
          <div key={index} style={{ backgroundColor: item.bgColor }} className={`overflow-hidden h-44 relative font-bold p-4 w-full cursor-pointer rounded-lg flex flex-col hover:bg-zinc-800 transition duration-300 ease-out`}>
            <span className="text-xl">{item.title}</span>
            <div className="absolute -right-4 -bottom-3 w-24 h-24 origin-bottom -rotate-12 ">
                <img className="" src={item.imgSrc}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
