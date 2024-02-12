import React from "react";
import category from "../../constant/category.json";

const SearchPage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold px-8 mt-8">Browse all</h2>
        <div className="flex flex-wrap justify-center gap-5 xs:gap-10 lg:gap-5 px-8 mt-5">
        {category?.data?.browseStart?.sections?.items[0]?.sectionItems?.items?.map(
          (item,idx) => (
            <RenderCard key={idx} card={item?.content?.data?.data?.cardRepresentation} />
          )
        )}
      </div>
    </>
  );
};

const RenderCard = ({ card }) => {
  return (
    card && (
      <div
        className={`w-48 h-48 xs:w-52 xs:h-52 rounded-md p-4 relative overflow-hidden`}
        style={{ background: card?.backgroundColor?.hex }}
      >
        <h3 className="font-bold text-xl">{card?.title?.transformedLabel}</h3>
        <div className="w-24 absolute bottom-0 right-0 rotate-[25deg] translate-x-[18%] translate-y-[-2%]">
          <img src={card?.artwork?.sources[0]?.url} alt="" />
        </div>
      </div>
    )
  );
};

export default SearchPage;
