import PropTypes from "prop-types";

const DoctorDetail = ({ doctor }) => {
  if (!doctor) {
    return <p>Selecciona un doctor para ver los detalles.</p>;
  }

  return (
    <div className="doctor-detail">
      <h2>Detalles del Doctor</h2>
      <p><strong>Nombre:</strong> {doctor.nombre}</p>
      <p><strong>Especialidad:</strong> {doctor.especialidad}</p>
      <p><strong>Disponibilidad:</strong> {doctor.disponibilidad.join(", ")}</p>
    </div>
  );
};

// Validación de las props
DoctorDetail.propTypes = {
  doctor: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
    disponibilidad: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default DoctorDetail;
