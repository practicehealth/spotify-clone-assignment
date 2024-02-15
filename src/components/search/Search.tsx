
import SideNavbar from "../home/SideNavbar"
import Content from "./Content"

const Search = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <div className="flex-none w-1/4 bg-black hidden sm:block">
          <SideNavbar />
        </div>
        <div className="flex-1 bg-black ">
          <Content />
        </div>
      </div>
      <div className="w-full h-20 bg-black flex items-center justify-between px-4 py-10 bg-red-500">
        <div className="text-white">
          <span>Preview of Spotify</span>
          <br />
          <span>Sign up to get unlimited offer</span>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-full font-bold">Sign Up</button>
      </div>
    </div>
  )
}

export default Search