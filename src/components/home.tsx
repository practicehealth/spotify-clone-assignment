import Footer from "./footer"
import Header from "./header"
import Library from "./library"
import Menu from "./menu"
import Playlist from "./playlist"
import SingupFooter from "./singupfooter"


function Home() {

  return (
    <div className='bg-black flex p-2'>        
      <div className="w-[20%] bg-black rounded mr-2 flex flex-col gap-2">
        <Menu/>
        <Library/>
      </div>
      <div className="w-[80%] bg-black rounded flex flex-col">
        <Header/>
        <Playlist/>
        <Footer/>
      </div>
      <div className="fixed bottom-0 right-0 left-0 w-full">
      <SingupFooter/>
      </div>
    </div>
  )
}

export default Home
