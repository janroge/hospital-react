import { memo } from "react";
import { useContext } from "react";
import { DoctorContext } from "./DoctorContext";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  const { setSelectedDoctor } = useContext(DoctorContext);
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
          onClick={() => setSelectedDoctor(doctor)}
        />
      ))}
    </div>
  );
};

export default memo(DoctorList); // Usamos memo
