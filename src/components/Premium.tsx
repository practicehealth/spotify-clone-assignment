const Premium = () => {
  return (
    <div className="w-full h-[8%] bg-gradient-to-r from-[#bb1ce3] to-[#389ee7] flex items-center justify-between px-4">
      <div>
        <p className="text-white text-sm font-medium">Preview of Spotify</p>
        <p className="text-white text-sm">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed
        </p>
      </div>
      <button className="h-[75%] w-[160px] bg-white block rounded-full text-sm font-semibold">
        Sign up for free
      </button>
    </div>
  );
};

export default Premium;
