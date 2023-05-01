
import './App.css';
import { Routes, Route, Link} from 'react-router-dom'
import Home from "./Home"
import About from "./About"



function App() {
  
  return (
    <>
    <header >
            <Link to='/' className='site-logo' >#VANLIFE</Link>
            <nav >
            <Link to='/about'  >About</Link>
            </nav>
        
    </header>
   
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
      </Routes>
      </>
  )
}

export default App;
