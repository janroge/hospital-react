import React from "react";
import PropTypes from "prop-types";

const DoctorCard = React.memo(function DoctorCard({ doctor, onClick }) {
  console.log(`Renderizando DoctorCard: ${doctor.nombre}`); // Depuración
  return (
    <div className="doctor-card" onClick={onClick}>
      <h3>{doctor.nombre}</h3>
      <p>{doctor.especialidad}</p>
    </div>
  );
});

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DoctorCard;
