import Sidebar from '../Components/Sidebar';
import {data} from '../data/Searchpagedata'
import Searchpagecard from '../Components/Searchpagecard';

import Lefticon from '../Assets/Icons/Lefticon';
import Righticon from '../Assets/Icons/Righticon';
import { CiSearch } from "react-icons/ci";


const Searchpage = () => {
  interface Searchdata{
    color?:string;
    title:string;
    url:string;
}
  return (
    <div className='flex w-full h-full bg-black'>
      <Sidebar/>
      <div className='fixed top-0 right-0 w-4/5 h-full overflow-auto rounded-md bg-customMajor'>

      <div className="top-0 h-[65px] bg-[rgb(16,16,16)] flex justify-between mb-8 sticky z-40 ">
         <div className="w-[100px] h-[40px] gap-2 mx-0 flex items-center pl-6 pt-4">
        <div className="text-center flex pt-[2px] w-[30px] h-[30px] rounded-[100%] bg-black">
          <Lefticon />
        </div>
        <div className="text-center flex pt-[2px] w-[30px] h-[30px] rounded-[100%] bg-black">
          <Righticon />
        </div>
      </div>
      <div className='w-[300px] h-[45px]  flex items-center justify-center text-center rounded-full mt-2  bg-[#2A2A2A] p-2'>
          <CiSearch className='text-white' size={20}/>
           <input placeholder='What do you want Play ?' className='w-full h-full text-[#353535] border-none outline-none  focus:border-none bg-[#2A2A2A] ' />
      </div>
      <div className="flex items-center gap-6 ml-auto mr-8 ">
        <h1 className="text-white text-[10px] md:text-[16px] ">Sign Up</h1>
        <div className="bg-white rounded-full justify-center flex items-center h-[24px] w-[80px] md:h-[48px] md:w-[110px]">
          <h1 className="text-black  text-[10px] md:text-[19px] font-semibold ">Login </h1>
        </div>
      </div>
         </div>
       <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 z-1 ml-[10px] gap-2 '>
           {
               data.map((item:Searchdata)=>(
                   <Searchpagecard color={item.color ?? 'defaultColor'}  title={item.title} url={item.url} />
               ))
           }
       </div>
    
    </div>
    </div>
  )
}

export default Searchpage;