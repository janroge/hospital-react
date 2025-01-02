import { useState } from "react";
import PropTypes from "prop-types";

function AppointmentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pasamos los datos al manejador recibido por props
  };

  return (
    <div>
      <h2>Formulario de Citas</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre del Paciente:</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Ingrese el nombre del paciente"
        />

        <label>Nombre del Doctor:</label>
        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          placeholder="Ingrese el nombre del doctor"
        />

        <label>Fecha de la Cita:</label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
        />

        <button type="submit">Agendar Cita</button>
      </form>
    </div>
  );
}

// Validación de props
AppointmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AppointmentForm;
