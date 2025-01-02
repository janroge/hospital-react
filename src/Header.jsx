import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Hospital Privado</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/equipo-medico">Equipo Médico</Link></li>
          <li><Link to="/citas">Agendar Cita</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
