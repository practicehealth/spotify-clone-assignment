import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Mainlayout from './components/MainLayout,'
import Home from './pages/Home'
import Search from './pages/Search'
import SearchResult from './pages/SearchResult'
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route path='' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='serachresult' element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}