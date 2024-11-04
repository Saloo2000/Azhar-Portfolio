import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/azhar-portfolio/' >
    <Routes>
    <Route path="/" element={<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
