import DoctorList from './components/DoctorList'; // Lista de doctores
import ServiceList from './components/ServiceList'; // Lista de servicios
import AppointmentForm from './components/AppointmentForm'; // Formulario de citas

function App() {
  // Datos de ejemplo para doctores
  const doctors = [
    { name: 'Dr. Juan Pérez', specialty: 'Cardiología', experience: 10 },
    { name: 'Dra. María López', specialty: 'Neurología', experience: 8 },
    { name: 'Dr. Carlos Gómez', specialty: 'Pediatría', experience: 12 },
  ];

  // Datos de ejemplo para servicios
  const services = ['Cardiología', 'Neurología', 'Pediatría', 'Radiología'];

  return (
    <div>
      <h1>Proyecto del Hospital</h1>

      {/* Lista de doctores */}
      {doctors && <DoctorList doctors={doctors} />}

      {/* Lista de servicios */}
      {services && <ServiceList services={services} />}

      {/* Formulario de citas */}
      <AppointmentForm />
    </div>
  );
}

export default App;
