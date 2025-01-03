import React from "react";
import PropTypes from "prop-types";

const ServiceList = React.memo(function ServiceList({ servicios }) {
  if (!servicios || servicios.length === 0) {
    return <p>No hay servicios disponibles.</p>;
  }

  return (
    <div className="service-list">
      <h2>Servicios Destacados</h2>
      <ul className="servicios-list">
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

ServiceList.propTypes = {
  servicios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceList;
