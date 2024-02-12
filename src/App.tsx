import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/:id" element={<Search />} />
    </Routes>
  );
}

export default App;
