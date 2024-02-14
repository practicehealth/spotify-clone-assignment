import Navbar from './components/Navbar'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home'
import Search from './pages/Search'
import Button from './components/Button';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  )
}

function Layout(){
  return (
    <div className='flex flex-col gap-2 p-2 h-screen w-screen'>
     <div className="app flex grow gap-2">
        <div className='hidden lg:flex'>
        <Navbar />
        </div>
        <main className="main bg-neutral-900 grow">
          <Outlet />
        </main>
     </div>

      <div className="px-6 py-3 flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between" style={{backgroundImage: 'linear-gradient(90deg,#af2896,#509bf5)'}}>
        <div>
          <div className='text-sm font-semibold'>Preview of Spotify</div>
          <div className=''>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</div>
        </div>
        <Button>Signup for free</Button>
      </div>
     </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App
