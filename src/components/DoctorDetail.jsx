import { useContext } from "react";
import { DoctorContext } from "./DoctorContext";

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

export default DoctorDetail;
