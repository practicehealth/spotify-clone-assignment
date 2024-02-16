import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Search from './pages/Search.tsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: "/",
    element: <Home />
  },
{path:'/search', element:<Search/>}]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
