import { memo } from "react";
import PropTypes from "prop-types";
import withClickLogger from "./withClickLogger"; // Importamos el HOC

const DoctorCard = ({ doctor, onClick }) => {
  return (
    <div className="doctor-card" onClick={onClick}>
      <h3>{doctor.nombre}</h3>
      <p>{doctor.especialidad}</p>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

// Aplica memo y el HOC con un nombre explícito
const EnhancedDoctorCard = memo(withClickLogger(DoctorCard));

export default EnhancedDoctorCard; // Exporta el componente con nombre explícito
