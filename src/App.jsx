import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Ventas from './pages/Ventas';
import Clientes from './pages/Clientes';
import Reportes from './pages/Reportes';
import Inventario from './pages/Inventario';
import Configuracion from './pages/Configuracion';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/ventas' element={<Ventas />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/reportes' element={<Reportes />} />
        <Route path='/inventario' element={<Inventario />} />
        <Route path='/configuracion' element={<Configuracion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;