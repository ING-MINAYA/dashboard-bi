import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to='/'>Dashboard</Link>
      <Link to='/ventas'>Ventas</Link>
      <Link to='/clientes'>Clientes</Link>
      <Link to='/reportes'>Reportes</Link>
      <Link to='/inventario'>Inventario</Link>
      <Link to='/configuracion'>Configuración</Link>
    </nav>
  );
}

export default Navbar;