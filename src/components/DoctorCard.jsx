import PropTypes from "prop-types";

const DoctorCard = ({ doctor, onClick }) => {
  return (
    <div className="doctor-card" onClick={onClick}>
      <h3>{doctor.nombre}</h3>
      <p>{doctor.especialidad}</p>
    </div>
  );
};

// Validación de las props
DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DoctorCard;