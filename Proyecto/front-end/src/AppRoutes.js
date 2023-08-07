import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buscar/:searchTerm" element={<HomePage />} />
        <Route path="/etiqueta/:tag" element={<HomePage />} />
    </Routes>
  );

}