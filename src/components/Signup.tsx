const Signup = () => {
    return (
      <div className="text-white w-screen absolute bottom-0 flex justify-between items-center h-[66px] bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 pl-[15px] pr-6 pt-[11px] pb-[7px] hover:cursor-pointer">
          <div className="flex flex-col gap-0">
          <p className="text-sm font-bold">Preview of Spotify</p>
          <p className="text-base font-semibold">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
          </div>
          <button className="text-black text-base bg-white rounded-full py-3 px-8 font-bold">Sign up for free</button>
      </div>
    )
  }
  
  export default Signup;