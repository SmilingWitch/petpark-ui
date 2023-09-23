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
      <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/petpark-ui/" element={<PrincipalPage/>} />
        <Route path="/petpark-ui/noticias" element={<NoticiasPag />} />
        <Route path="/petpark-ui/adopciones" element={<AdopcionesPag/>} />
        <Route path="/petpark-ui/tienda" element={<ShopPag/>} />
      </Routes>
  </BrowserRouter>
  </div>  
  )
}

export default App
