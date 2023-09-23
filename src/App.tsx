import { useState } from 'react'
import './App.css'
import PrincipalPage from './pages/principalPage/PrincipalPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoticiasPag from './pages/noticiasPag/NoticiasPag';
import AdopcionesPag from './pages/adopcionesPag/AdopcionesPag';
import ShopPag from './pages/shopPag/ShopPag';
import NavBar from './components/navBar/NavBar';




function App() {
  

  return (
    <div className='App'>
      
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/pets/" element={<PrincipalPage/>} />
        <Route path="/noticias" element={<NoticiasPag />} />
        <Route path="/adopciones" element={<AdopcionesPag/>} />
        <Route path="/tienda" element={<ShopPag/>} />
      </Routes>
    
  </BrowserRouter>
  </div>  
  )
}

export default App
