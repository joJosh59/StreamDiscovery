import { useState } from 'react'
import './App.css'
import Navibar from './Composant/Navibar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accueil from './Composant/Accueil'

function App() {
  

  return (
    <>
    <Navibar />
    <BrowserRouter>
    <Routes>
      <Route element={<Accueil />} path='/' />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
