import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import Footer from './Footer.tsx';
import Search from './Search.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <div className="flex-grow-[8.5] overflow-y-auto">
          <Sidebar>
            <Routes>
              <Route path="/" element={<App />} />
            </Routes>
            <Routes>
              <Route path="/search" element={<Search />} />
            </Routes>
          </Sidebar>
        </div>
        <div className="flex-grow-[1.5]">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
