
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './layout/RootLayout/RootLayout'
import Home from './pages/home/Home'
import Search from './pages/search/Search'

function App() {

  return (
   <Routes>
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
    </Route>
   </Routes>
  )
}

export default App
