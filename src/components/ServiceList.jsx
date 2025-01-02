import PropTypes from "prop-types";

function ServiceList({ services }) {
  if (!services || services.length === 0) {
    return <p>No hay servicios disponibles</p>;
  }

  return (
    <>
      {/* Usamos Fragmentos para evitar un div extra */}
      <h2>Lista de Servicios</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </>
  );
}

// Validación de props
ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceList;
