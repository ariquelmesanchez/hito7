import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/views/Navbar';
import { Footer } from './components/views/Footer';
import { Header } from './components/views/Header';
import { Register } from './components/views/Register';
import { Login } from './components/views/Login';
import { Profile } from './components/views/Profile';
import { ShoppingCart } from './components/views/ShoppingCart';
import PizzaDetail from './components/views/PizzaDetail';
import { NotFound } from './components/views/NotFound';
import CardPizza from './components/sub-components/CardPizza';
import AuthGuard from './components/guard/AuthGuard'; // Import AuthGuard component

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<CardPizza />}
        />
        <Route
          path="/register"
          element={
            <AuthGuard requiresAuth={false}>
              <Register />
            </AuthGuard>
          }
        />
        <Route
          path="/login"
          element={
            <AuthGuard requiresAuth={false}>
              <Login />
            </AuthGuard>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthGuard requiresAuth={true}>
              <Profile />
            </AuthGuard>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthGuard requiresAuth={true}>
              <ShoppingCart />
            </AuthGuard>
          }
        />
        <Route
          path="/pizza/:id"
          element={<PizzaDetail />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;




