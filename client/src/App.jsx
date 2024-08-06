import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import OurMenu from './pages/OurMenu';
import dishesData from "../dishes.json"
import Navbar from "./components/Navbar"

const App = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const handleMenuClick = () => {
  //   setShowMenu(prevShowMenu => !prevShowMenu);
  // };
  const dishes = dishesData.dishesData[0].dishes;
  return (
    <Router>
      {/* <Navbar onMenuClick={handleMenuClick}/> */}
      <Navbar/>
      {/* {showMenu && <OurMenu dishes={dishes}/>} */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/ourmenu' element={<OurMenu dishes={dishes}/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
      <Toaster/>
      
    </Router>
  )
}

export default App
