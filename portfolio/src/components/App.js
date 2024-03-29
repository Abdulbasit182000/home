import About from './About';
import Experience from './Experience';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import Work from './Work';
import Contact from './Contact';
import { useEffect } from 'react';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/experience' element={<Experience/>} />
            <Route path='/work' element={<Work/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
