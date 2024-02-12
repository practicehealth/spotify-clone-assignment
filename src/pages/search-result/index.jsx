import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import songList from "../../constant/songLists.json";

const SearchResult = () => {
  const { srch } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const filterData = songList?.filter(
      (list) =>
        list.title.toLocaleLowerCase().startsWith(srch.toLocaleLowerCase()) ||
        list.singer.toLocaleLowerCase().startsWith(srch.toLocaleLowerCase())
    );

    setData(filterData);
  }, [srch]);

  console.log(data);

  return (
    <>
      <div className="min-h-60 px-8 mt-5">
        {data?.length ? (
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-[45%] xl:w-[35%]">
              <h2 className="text-2xl font-bold rounded-md">Top result</h2>
              <div className="bg-[#181818] p-5 mt-2 rounded-md hover:bg-[#282828]">
                <img className="w-24 h-24 border-[1px] rounded-md" />
                <h1 className="text-2xl font-bold">{data[0]?.title}</h1>
                <span className="text-[#a7a7a7]">Song</span>
                <span className="mx-4">{data[0]?.singer}</span>
              </div>
            </div>

            <div className="md:w-[55%] xl:w-[60%]">
              <h2 className="text-2xl font-bold rounded-md">Songs</h2>
              <div className="px-0 md:p-5 space-y-4 text-sm">
                {data?.slice(0, 3)?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 items-center relative p-1 px-2 cursor-pointer hover:bg-[#282828]"
                    >
                      <img className="w-9 h-9 border-[1px] rounded-md" />
                      <div>
                        <p>{item.title}</p>
                        <p className="text-[#a7a7a7]">{item.singer}</p>
                      </div>
                      <p className="absolute right-4">{item.duration}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ) : (
          <div className="flex flex-col justify-end items-center min-h-60">
            <p className="text-2xl font-bold">No results found for "{srch}"</p>
            <p>
              Please make sure your words are spelled correctly, or use fewer or
              different keywords.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResult;
