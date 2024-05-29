import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useAuth } from './store/Auth'
import { createBrowserRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product/:id" element={<SingleProduct />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
