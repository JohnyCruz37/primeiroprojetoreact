import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'

import Inicio from './pages/Inicio';
import Filme from './pages/Filmes';
import Pesquisar from './pages/Pesquisar';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Inicio />} />
          <Route path='filme/:id' element={<Filme />} />
          <Route path='pesquisar' element={<Pesquisar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
