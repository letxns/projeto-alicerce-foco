import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ListarVeiculo from './Pages/ListarVeiculo'
import './App.css';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListarVeiculo/>} />
      </Routes>
    </Router>
  )
}

export default App
