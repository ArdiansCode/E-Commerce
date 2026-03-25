import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import CartProduct from './pages/Cart.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import CheckOut from './pages/Checkout.jsx'
import Success from './pages/Success.jsx'
import { CartProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<CartProduct />} />
        <Route path='/Product-Detail' element={<ProductDetail />} />
        <Route path='/Checkout/:id' element={<CheckOut />} />
        <Route path='/Success' element={<Success />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
