import { Fragment } from "react";

const Library = () => {
  return (
    <Fragment>
      <div className="bg-[#242424] mx-2 xl:px-6 lg:px-5 md:px-4 sm:px-2 xl:p-4 lg:p-3 md:p-2 sm:p-1 rounded-lg mb-8">
        <h1 className="text-white font-bold mb-2 cursor-default">
          Create your first playlist
        </h1>
        <p className="text-white font-bold text-sm xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2 cursor-default">
          its easy, well help you
        </p>
        <button className="bg-white rounded-full xl:px-4 lg:px-3 md:px-2 sm:px-1 font-semibold xl:py-1 lg:py-1 md:py-1 sm:py-1   hover:scale-105 xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
          Create playlist
        </button>
      </div>
      <div className="bg-[#242424] mx-2 xl:px-6 lg:px-5 md:px-4 sm:px-2 xl:p-4 lg:p-3 md:p-2 sm:p-1 rounded-lg mb-8">
        <h1 className="text-white font-bold mb-2 cursor-default">
          Create your first playlist
        </h1>
        <p className="text-white font-bold text-sm mb-5 cursor-default">
          its easy, well help you
        </p>
        <button className="bg-white rounded-full xl:px-4 lg:px-3 md:px-2 sm:px-1 font-semibold xl:py-1 lg:py-1 md:py-1 sm:py-1 hover:scale-105 xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
          Create playlist
        </button>
      </div>
    </Fragment>
  );
};

export default Library;
