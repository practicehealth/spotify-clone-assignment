import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Layout from './components/Layout';

export default function App() {
    return (
         <BrowserRouter>
         <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
         </Layout>
        </BrowserRouter>
    );
}
