const Section2 = () => {
    return (
      <div className="w-[328px] h-[493px] bg-[#121212] rounded-lg">
        {/* 1 section */}
        <div className="flex items-center justify-between px-6 py-2 sticky top-0">
          <div className="w-[296px] h-10 flex gap-3 items-center hover:cursor-pointer">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="Svg-sc-ytk21e-0 bneLcE w-6 h-6 fill-zinc-400"
            >
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
            </svg>
            <span className="text-base text-zinc-400 font-bold">
              Your Library
            </span>
          </div>
          <div className="hover:cursor-pointer">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="Svg-sc-ytk21e-0 dYnaPI w-4 h-4 fill-zinc-400"
            >
              <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
            </svg>
          </div>
        </div>
  
        {/*2nd section  */}
        <div className="w-[360px] h-[280px] flex flex-col gap-6 pl-2 py-2 overflow-scroll no-scrollbar">
          <div className="bg-[#242424] w-[312px] h-[133px] rounded-lg px-5 py-4 flex flex-col items-start">
            <p className="text-base font-bold text-white">
              Create your first playlist
            </p>
            <p className="text-sm font-semibold text-white mt-1">
              It's easy, we'll help you
            </p>
            <button className="bg-white text-zinc-950 text-sm px-4 py-[5px] font-bold rounded-full mt-5 hover:scale-105">
              Create playlist
            </button>
          </div>
          <div className="bg-[#242424] w-[312px] h-[133px] rounded-lg px-5 py-4 flex flex-col items-start">
            <p className="text-base font-bold text-white">
              Let's find some podcasts to follow
            </p>
            <p className="text-sm font-semibold text-white mt-1">
              We'll keep you updated on new episodes
            </p>
            <button className="bg-white text-zinc-950 text-sm px-4 py-[5px] font-bold rounded-full mt-5 hover:scale-105">
              Browse Podcasts
            </button>
          </div>
        </div>
  
        <span className="text-zinc-400 text-xs absolute bottom-44 left-8 font-semibold hover:underline hover:cursor-pointer">
          Cookies
        </span>
        <button className="flex items-center gap-1 absolute bottom-28 left-8 justify-center rounded-3xl border-zinc-100 border px-3 py-1 hover:border-2 hover:scale-105">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="Svg-sc-ytk21e-0 dYnaPI w-4 h-4 fill-white"
          >
            <path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z"></path>
          </svg>
          <span className="font-bold text-sm">English</span>
        </button>
      </div>
    );
  };
  
  export default Section2;