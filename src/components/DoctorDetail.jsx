import { useContext } from "react";
import { DoctorContext } from "./DoctorContext";
import PropTypes from "prop-types";

const DoctorDetail = () => {
  const { selectedDoctor } = useContext(DoctorContext); // Usamos el contexto

  if (!selectedDoctor) {
    return <p>Selecciona un doctor para ver los detalles.</p>;
  }

  return (
    <div className="doctor-detail">
      <h2>Detalles del Doctor</h2>
      <p><strong>Nombre:</strong> {selectedDoctor.nombre}</p>
      <p><strong>Especialidad:</strong> {selectedDoctor.especialidad}</p>
      <p><strong>Disponibilidad:</strong> {selectedDoctor.disponibilidad.join(", ")}</p>
    </div>
  );
};

// Validación del contexto recibido
DoctorDetail.propTypes = {
  selectedDoctor: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
    disponibilidad: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default DoctorDetail;
