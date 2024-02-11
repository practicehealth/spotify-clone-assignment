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
  
        {/* login and signup buttons */}
        <div className="flex gap-7 pr-4">
          <button className="text-zinc-400 font-bold hover:text-white hover:scale-110">Sign up</button>
          <button className="bg-white text-black px-8 py-3 font-bold rounded-full hover:bg-zinc-100 hover:scale-105">Log in</button>
        </div>
      </div>
    );
  };
  
  export default Navbar;