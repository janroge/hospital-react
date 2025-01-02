import { useContext } from "react";
import { DoctorContext } from "./DoctorContext";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  const { setSelectedDoctor } = useContext(DoctorContext);

  const doctores = [
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología", disponibilidad: ["Lunes", "Miércoles", "Viernes"] },
    { id: 2, nombre: "Dra. Ana Gómez", especialidad: "Neurología", disponibilidad: ["Martes", "Jueves"] },
  ];

  return (
    <div className="doctor-list">
      <h2>Lista de Doctores</h2>
      {doctores.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          onClick={() => setSelectedDoctor(doctor)}
        />
      ))}
    </div>
  );
};

export default DoctorList;
