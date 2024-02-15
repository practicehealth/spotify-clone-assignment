import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import SpotifyLayout from "./components/SpotifyLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SpotifyLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
