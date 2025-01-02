import { useContext } from "react";
import { DoctorContext } from "./DoctorContext";
import DoctorCard from "./DoctorCard";
import PropTypes from "prop-types";

const DoctorList = () => {
  const { setSelectedDoctor } = useContext(DoctorContext); // Usamos el contexto
  const doctores = [
    { nombre: "Dr. Juan Pérez", especialidad: "Cardiología", disponibilidad: ["Lunes", "Miércoles", "Viernes"] },
    { nombre: "Dra. Ana Gómez", especialidad: "Neurología", disponibilidad: ["Martes", "Jueves"] },
  ];

  return (
    <div className="doctor-list">
      {doctores.map((doctor, index) => (
        <DoctorCard
          key={index}
          doctor={doctor}
          onClick={() => setSelectedDoctor(doctor)} // Actualizamos el contexto
        />
      ))}
    </div>
  );
};

// Validación del contexto
DoctorList.propTypes = {
  setSelectedDoctor: PropTypes.func,
};

export default DoctorList;
