import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import StoreProvider from './components/context/StoreProvider.jsx'
import CartProvider from './components/context/CartContext.jsx'
import UserProvider from './components/context/UserProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <UserProvider >
    <CartProvider >
    <StoreProvider>
    <App />
    </StoreProvider>
    </CartProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
