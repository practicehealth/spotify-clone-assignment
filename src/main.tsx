import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import Footer from './Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Sidebar>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
