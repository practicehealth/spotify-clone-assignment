import Header from "./header"
import Library from "./library"
import Menu from "./menu"
import Playlist from "./playlist"


function Home() {

  return (
    <div className='bg-black h-screen flex p-2'>        
      <div className="w-[20%] bg-black rounded mr-2 flex flex-col gap-2">
        <Menu/>
        <Library/>
      </div>
      <div className="w-[80%] bg-black border rounded flex flex-col">
        <Header/>
        <Playlist/>
      </div>
    </div>
  )
}

export default Home
