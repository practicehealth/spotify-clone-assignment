import './App.css';
import SideBar from '/src/components/LeftPannel';
import BottomBar from '/src/components/BottomBar';
import RightBar from '/src/components/RightBar';
import SearchPage from './components/SearchPage';
import { Outlet } from 'react-router-dom';

function App() {



  return (
   <div className=' p-2 bg-black grid grid-cols-[1fr_3.24fr] grid-rows-[9fr_1fr] h-screen '>
      <SideBar/>
      <div className=' col-span-1 row-span-1 mb-2 overflow-y-scroll rounded-lg'>
        <Outlet/>

      </div> 
      <div className=' col-span-2 row-span-1'>
        <BottomBar/>
      </div> 
   </div>
  )
}

export default App
