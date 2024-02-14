import React from "react";
import Layout from "../layouts/Layout";
import { browseAll } from "../data/browseAll";
import { cn } from "../utils";

type Props = {};

const Search = (props: Props) => {
  return (
    <Layout>
      <div className="mt-6 ml-4 space-y-4">
        <h3 className="text-2xl font-bold text-white">Browse all</h3>
        <div className="grid grid-cols-5 gap-6">
          {browseAll?.map((item) => (
            <div
              className={cn(
                `w-52 h-52 rounded-md py-2 px-4 relative overflow-hidden cursor-pointer`,
                item.color
              )}
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <div className="w-24 absolute bottom-0 right-0 rotate-[25deg] translate-x-[18%] translate-y-[-2%]">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
