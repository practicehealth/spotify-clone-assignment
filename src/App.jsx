import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import SearchResult from './pages/SearchResult.jsx';
import SideBar from './pages/SideBar.jsx';
import FooterSignUp from './components/FooterSignUp.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col gap-1 h-screen  '>

          {/* this is for small devices only  */}
          <div className='md:hidden flex gap-3 overflow-x-auto '>
            <div className='h-[75vh] min-w-[16rem] overflow-auto ml-3 mt-2'>  <SideBar /></div>
            <div className='h-[75vh] min-w-[36rem] overflow-auto bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-xl mr-3 mt-2 mb-2'>
              <div className="sticky top-0 z-10">
                <Header />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path='/result' element={<SearchResult/>} />
              </Routes>
              <Footer />
            </div>
          </div>

          {/* this is for medium device  screen to up */}
          <div className='hidden md:grid grid-cols-10 gap-4'>
            <div className='col-span-3 h-[84vh] overflow-y-auto ml-3 mt-2'>  <SideBar /></div>
            <div className='col-span-7 h-[84vh] overflow-y-auto bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-xl mr-3 mt-2 mb-2'>
              <div className="sticky top-0 z-10">
                <Header />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path='/result' element={<SearchResult/>} />
              </Routes>
              <Footer />
            </div>
          </div>

          <div className='mx-2'><FooterSignUp /></div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

