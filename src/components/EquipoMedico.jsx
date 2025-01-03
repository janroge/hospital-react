import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";

const EquipoMedico = React.memo(function EquipoMedico() {
  const [doctores, setDoctores] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDoctores = async () => {
    try {
      const response = await fetch("/api.json");
      const data = await response.json();
      setDoctores(data.equipoMedico);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar los datos del equipo médico:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctores();
  }, []);

  const doctoresFiltrados = doctores.filter((doctor) =>
    filtro ? doctor.especialidad === filtro : true
  );

  if (loading) {
    return <p className="loading">Cargando equipo médico...</p>;
  }

  return (
    <>
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
    </>
  );
});

export default EquipoMedico;
