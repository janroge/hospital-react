import { useState } from "react";
import DoctorCard from "./DoctorCard";

const EquipoMedico = () => {
  const [filtro, setFiltro] = useState("");

  const doctores = [
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología" },
    { id: 2, nombre: "Dra. Ana Gómez", especialidad: "Neurología" },
    { id: 3, nombre: "Dr. Carlos López", especialidad: "Pediatría" },
  ];

  const doctoresFiltrados = doctores.filter((doctor) =>
    filtro ? doctor.especialidad === filtro : true
  );

  return (
    <div className="equipo-medico">
      <h1>Equipo Médico</h1>
      <label>
        Filtrar por especialidad:
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="">Todos</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Neurología">Neurología</option>
          <option value="Pediatría">Pediatría</option>
        </select>
      </label>
      <div className="doctor-list">
        {doctoresFiltrados.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default EquipoMedico;
