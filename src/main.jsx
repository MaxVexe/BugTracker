import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import About from './pages/About.jsx'


export default function Router(){
  <BrowserRouter>
  <Routes>
    <Routes path="about" element = {<About />}></Routes>
  </Routes>
  </BrowserRouter>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
