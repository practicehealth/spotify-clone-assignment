import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Search from "./components/search/Search"


const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </div>
  )
}

export default App
