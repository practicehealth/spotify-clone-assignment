
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Search from './components/Search'
import SignUpFooter from './components/SignUpFooter'

function App() {


  return (
    <Router>
      <div className='h-screen w-screen flex flex-col  bg-background p-2 box-border justify-center items-center gap-1'>
        <div className=" justify-between gap-2 flex box-border w-full h-[calc(100%_-_60px)]">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </div>
        <SignUpFooter />
      </div>
    </Router>
  )
}

export default App
