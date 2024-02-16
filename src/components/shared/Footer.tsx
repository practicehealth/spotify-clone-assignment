function Footer() {
  return (
    <div className='w-full z-10 p-2 !pt-0'>
      <footer className='flex min-w-[620px] h-auto'>
        <div className='pt-[11px] pr-6 pl-[15px] pb-[7px] bg-footerGradient w-full flex justify-between'>
          <div className="mb-1">
            <p className=" text-sm font-bold m-0 text-white">Preview of Spotify</p>
            <p className="text-base text-white font-normal">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
          </div>
          <button className='rounded-full cusor-pointer text-center bg-white inline-block'>
            <span className='rounded-full flex inline-block relative px-8 py-2 font-bold text-base min-h-12 items-center'>Sign up for free</span>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Footer