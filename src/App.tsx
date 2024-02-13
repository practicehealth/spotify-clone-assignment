import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Bottombar from "./components/Bottombar";
import SearchResult from "./pages/SearchResult";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <main className="flex w-full bg-black">
        <Sidebar />
        <div className="m-2 w-full">
          <Topbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/searchresult" element={<SearchResult />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      <Bottombar />
    </>
  );
}

export default App;
