import React from "react";
import PropTypes from "prop-types";

const Header = React.memo(function Header({ title }) {
  return (
    <header>
      <div className="logo">
        <h1>{title}</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/equipo-medico">Equipo Médico</a></li>
          <li><a href="/citas">Agendar Cita</a></li>
          <li><a href="/servicios">Servicios</a></li>
        </ul>
      </nav>
    </header>
  );
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
