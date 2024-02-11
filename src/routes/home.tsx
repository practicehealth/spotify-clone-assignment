import Footer from "../components/footer"
import Header from "../components/header"
import Library from "../components/library"
import Menu from "../components/menu"
import Playlist from "../components/playlist"
import SingupFooter from "../components/singupfooter"


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
      {/* <style global jsx>
        {
          `
          body{
            overflow: hidden;
          }
          `
        }
      </style> */}
    </div> 
    
  )
}

export default Home
