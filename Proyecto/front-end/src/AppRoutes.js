import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import FoodPage from './Pages/Food/FoodPage';
import CartPage from './Pages/Cart/CartPage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buscar/:searchTerm" element={<HomePage />} />
        <Route path="/etiqueta/:tag" element={<HomePage />} />
        <Route path="/comidas/:id" element={<FoodPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registrar" element={<RegisterPage />} />
    </Routes>
  );

}