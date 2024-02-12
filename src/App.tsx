import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import Layout from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
