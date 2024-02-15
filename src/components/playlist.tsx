import { TbPlayerPlayFilled } from "react-icons/tb";

const playlistData = [
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000027cd703bbfec2f1e86c879bec",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
  {
    imgSrc: "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    title: "Dinner with Friends",
    subTitle: "The perfect soundtrack to those long nights over dinner",
  },
];
export default function Playlist() {
  return (
    <div className="p-4 text-white bg-[#1e1e1e] rounded flex flex-col pt-16">
      <h1 className="font-bold text-2xl">Spotify Plalist</h1>

      <div className="grid grid-cols-5 grid-auto-rows-auto gap-4">
        {playlistData.map((item, index) => (
          <div key={index} className="relative p-4 w-full cursor-pointer bg-[#181818] rounded-lg flex flex-col hover:bg-zinc-800 transition duration-300 ease">
            <div  className="w-full h-full mb-[16px]">
              <img className="rounded-t-lg w-full rounded" src={item.imgSrc} alt="" />
            </div>
            <div className=" hover:-translate-y-4 hover:transition-all hover:duration-300 hover:ease-out ">
            <div className="absolute opacity-0 hover:opacity-100 rounded-full bg-green-500 w-12 h-12 flex right-0 justify-center items-center ">
            <TbPlayerPlayFilled className="text-black w-6 h-6"/>
            </div>
            </div>
            <div className="">
                <h3 className="font-bold">{item.title}</h3>
                <h4 className="text-sm text-[#a7a7a7]">{item.subTitle}</h4>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
