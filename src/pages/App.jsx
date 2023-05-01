

import { Routes, Route, Link} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import index from './index.css'



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
