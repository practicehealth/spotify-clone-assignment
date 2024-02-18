import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Pages/Home';
import Searchpage from './Pages/Searchpage';




function App() {
  return (
    <div className="w-full h-full overflow-x-hidden bg-black">
      
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Searchpage/>}/>
          
          
        </Routes>
       </Router>
       
    </div>
  )
}

export default App;
  