import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Hospital Logo" />
        <h1>Hospital Privado</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/doctores">Doctores</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/agendar-cita">Agendar Cita</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
