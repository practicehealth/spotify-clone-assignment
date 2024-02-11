const Navbar = () => {
  return (
    <div className="text-white w-[1184px] h-[64px] absolute right-2 rounded-t-lg bg-[#121212] flex items-center px-5 justify-between">
      {/* arrows */}
      <div className="flex gap-2 hover:cursor-pointer">
        <span className="bg-black p-2 rounded-full">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            className="Svg-sc-ytk21e-0 cAMMLk IYDlXmBmmUKHveMzIPCF w-4 h-4 fill-white"
            viewBox="0 0 16 16"
          >
            <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
          </svg>
        </span>
        <span className="bg-black p-2 rounded-full hover:cursor-pointer">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            className="Svg-sc-ytk21e-0 cAMMLk IYDlXmBmmUKHveMzIPCF w-4 h-4 fill-white"
            viewBox="0 0 16 16"
          >
            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
          </svg>
        </span>
      </div>

      <div className="absolute left-28 flex items-center">
        <input
          className="w-96 p-4 pl-14 bg-[#242424] hover:bg-[#3333335c] h-[48px] text-sm focus:border-white focus:border-2 focus:outline-white rounded-full"
          placeholder="What do you want to listen to ?"
        />
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          className="Svg-sc-ytk21e-0 bneLcE absolute left-4 search-icon w-6 h-6 fill-zinc-400 hover:fill-white"
          viewBox="0 0 24 24"
        >
          <svg
            fill="#FFFFFF"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
          </svg>
        </svg>
      </div>

      {/* login and signup buttons */}
      <div className="flex gap-7 pr-4">
        <button className="text-zinc-400 font-bold hover:text-white hover:scale-110">
          Sign up
        </button>
        <button className="bg-white text-black px-8 py-3 font-bold rounded-full hover:bg-zinc-100 hover:scale-105">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
