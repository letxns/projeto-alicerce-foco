import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar as Nav } from './Components/Navbar';
import Footer from './Components/Footer';
import ListarVeiculo from './Pages/ListarVeiculo';
import FormularioVeiculo from './Pages/FormularioVeiculo';
import EditarVeiculo from './Pages/EditarVeiculo';
import CriarConta from './Pages/CriarConta';
import Login from './Pages/Login';
import './App.css';

function App() {

  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<ListarVeiculo />} />
          <Route path="/add" element={<FormularioVeiculo />} />
          <Route path="/edit/:index" element={<EditarVeiculo />} />
          <Route path="/criar-conta" element={<CriarConta />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;