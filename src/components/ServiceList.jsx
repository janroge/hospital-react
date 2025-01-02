import PropTypes from "prop-types";

const ServiceList = ({ services = [] }) => {
  return (
    <div className="service-list">
      <h2>Servicios</h2>
      {services.length > 0 ? (
        services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.nombre}</h3>
            <p>{service.descripcion}</p>
          </div>
        ))
      ) : (
        <p>No hay servicios disponibles.</p>
      )}
    </div>
  );
};

ServiceList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceList;
