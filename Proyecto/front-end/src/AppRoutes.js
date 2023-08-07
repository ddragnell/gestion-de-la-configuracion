import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import FoodPage from './Pages/Food/FoodPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buscar/:searchTerm" element={<HomePage />} />
        <Route path="/etiqueta/:tag" element={<HomePage />} />
        <Route path="/comidas/:id" element={<FoodPage />} />
    </Routes>
  );

}