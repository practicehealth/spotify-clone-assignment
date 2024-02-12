import { useState } from "react"
import BrowseAll from "../components/browseall"
import Footer from "../components/footer"
import Header from "../components/header"
import Library from "../components/library"
import Menu from "../components/menu"
import SingupFooter from "../components/singupfooter"


export default function Search() {
  const [searchValue, setSearchValue] = useState(String);
  console.log(searchValue);

  return (
    <div className='flex p-2 bg-black'>        
      <div className="w-[20%] bg-black rounded mr-2 flex flex-col gap-2">
        <Menu/>
        <Library/>
      </div>
      <div className="w-[80%] bg-black rounded flex flex-col">
        {/* Pass only searchValue to Header */}
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <BrowseAll searchValue={searchValue}/>
        <Footer/>
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-full">
        <SingupFooter/>
      </div>
    </div> 
  )
}

