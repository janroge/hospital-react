import { useState } from 'react'; // Importamos useState

function AppointmentForm() {
  // Estado local para manejar los datos del formulario
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    appointmentDate: '',
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // Extraemos el nombre y valor del input
    setFormData({ ...formData, [name]: value }); // Actualizamos el estado
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log('Datos del formulario:', formData); // Mostramos los datos en consola
  };

  return (
    <div>
      <h2>Formulario de Citas</h2>
      <form onSubmit={handleSubmit}>
        {/* Input para el nombre del paciente */}
        <label>Nombre del Paciente:</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Ingrese el nombre del paciente"
        />

        {/* Input para el nombre del doctor */}
        <label>Nombre del Doctor:</label>
        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          placeholder="Ingrese el nombre del doctor"
        />

        {/* Input para la fecha de la cita */}
        <label>Fecha de la Cita:</label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
        />

        {/* Botón de envío */}
        <button type="submit">Agendar Cita</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
