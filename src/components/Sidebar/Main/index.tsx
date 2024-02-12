/// <reference types="vite-plugin-svgr/client" />
import Card from "./../../Card"
import Button from "./../../Button"
import { SidebarFooter } from "./SidebarFooter"
import AddIcon from "./../../../assets/icons/add.svg?react";
import LibraryIcon from "./../../../assets/icons/library.svg?react";


function index() {

  return (
    <Card className="mt-2 mb-4 p-2 py-4 h-full">
       <div className="flex justify-between flex-1 px-4">
         <div className="flex">
         <LibraryIcon fill="#FFFFFF" width={24} height={24}/> 
         <span className="font-semibold ml-4 text-white/80">Your Libary</span>   
          </div> 
         <AddIcon fill="#FFFFFF" width={16} height={16} opacity={0.8}/> 
       
       </div>
       <div className="max-h-32 overflow-y-auto">
       <Card className="bg-[var(--bg-elevated-base)] p-4 my-2">
         <div className="my-2 text-white font-semibold">Create your first playlist</div>
        <div className="mb-2 text-white">It's easy, we'll help</div>
        <Button className="mt-2 font-normal py-1 rounded-full">Create Playlist</Button>
      </Card>  
      <Card className="bg-[var(--bg-elevated-base)] p-4 my-2">
         <div className="my-2 text-white font-semibold">Let's find some podcast to follow</div>
        <div className="mb-2 text-white">we'll keep you updated on new episodes</div>
        <Button className="mt-2 font-normal py-1 rounded-full">Browse podcasts</Button>
      </Card> 

       </div>
    
     <SidebarFooter/>
    </Card>
  )
}



export default index