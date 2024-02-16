import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/shared/Sidebar'
import Footer from './components/shared/Footer'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import SearchResults from './components/SearchResults'

function App() {

  return (

    <Router>
      <div className="wrapper">
      <div className='hidden lg:flex'>
        <Sidebar />
      </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/search-results" element={<SearchResults/>} />
        </Routes>
      </div>
      <div className='hidden lg:flex'>
        <Footer />
      </div>
      
    </Router>

  )
}

export default App
