
function SongItem({ item }) {

  return (
    <div
      key={item.id}
      className={
        "bg-footer py-2 rounded bg-slate-500 bg-opacity-30 flex flex-col items-center w-[87%] hover:bg-opacity-20 cursor-pointer "
      }
    >
      <div className="pt-[80%] text-center w-[85%] flex flex-col items-center justify-center relative rounded-xl overflow-hidden  ">
        <img
          src={item.image}
          className={`absolute inset-0 object-cover w-[100%] rounded-xl }`}
        />
      </div>
      <div className=" w-[85%]  ">
        <h6 className="whitespace-nowrap text-sm my-2 text-wrap font-semibold text-white">
          {item.title}
        </h6>
        <p className="line-clamp-2  text-xs mt-1 text-slate-200">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default SongItem;
