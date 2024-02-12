import { Fragment } from "react"

const Footer = ()=>{
    return(
        <Fragment>
                    <div className="col-span-10 bg-gradient-to-r from-[#af2896]  to-[#509bf5] border rounded border-transparent">
          <p className="text-white">
            <div className="border rounded border-transparent flex justify-between xl:px-6 lg:px-5 md:px-4 sm:px-2 px-2 items-center">
              <div className="">
                <p className="text-white text-sm font-bold">
                  Preview of Spotify
                </p>
                <p className=" font-medium">
                  Sign up to get unlimited songs and podcasts with occasional
                  ads. No credit card needed.
                </p>
              </div>
              <div>
                <button className=" text-black font-bold bg-white border rounded-full xl:px-6 lg:px-5 md:px-4 sm:px-2 xl:py-3 lg:py-3 md:py-3 sm:py-2 py-1">
                  Sign up for free
                </button>
              </div>
            </div>
          </p>
        </div>
        </Fragment>
    )
}

export default Footer