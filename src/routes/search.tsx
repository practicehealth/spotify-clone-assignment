import BrowseAll from "../components/browseall"
import Footer from "../components/footer"
import Header from "../components/header"
import Library from "../components/library"
import Menu from "../components/menu"
import SingupFooter from "../components/singupfooter"


export default function Search() {

  return (
    <div className='bg-black flex p-2'>        
      <div className="w-[20%] bg-black rounded mr-2 flex flex-col gap-2">
        <Menu/>
        <Library/>
      </div>
      <div className="w-[80%] bg-black rounded flex flex-col">
        <Header/>
        <BrowseAll/>
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
