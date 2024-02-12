import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SearchTab from './components/SearchTab'
import SpotifySideBar from './components/SideNav/SpotifySideBar'
function App() {

  return (
    <div className="app-container flex justify-evenly h-full-vh w-full-wh bg-[#000] text-white m-0 p-0 min-w-[900px]" >
    <Router>
      <SpotifySideBar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/search" element={<SearchTab />} />
      </Routes>

    </Router>
    </div>
  )
}

export default App
