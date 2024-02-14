import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchId from "./pages/SearchId";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search">
        <Route path="" element={<Search />} />
        <Route path=":id" element={<SearchId />} />
      </Route>
    </Routes>
  );
}

export default App;
