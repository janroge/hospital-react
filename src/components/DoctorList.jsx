import PropTypes from "prop-types";
import DoctorCard from "./DoctorCard";

const DoctorList = ({ onSelectDoctor }) => {
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
          onClick={() => onSelectDoctor(doctor)}
        />
      ))}
    </div>
  );
};

// Validación de las props
DoctorList.propTypes = {
  onSelectDoctor: PropTypes.func.isRequired,
};

export default DoctorList;