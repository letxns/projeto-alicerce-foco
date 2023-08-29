import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ListarVeiculo from './Pages/ListarVeiculo';
import FormularioVeiculo from './Pages/FormularioVeiculo';
import './App.css';

function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<ListarVeiculo />} />
          <Route path="/add" element={<FormularioVeiculo />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
