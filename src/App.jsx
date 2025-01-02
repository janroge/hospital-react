import Header from "./Header";
import DoctorList from "./components/DoctorList";
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";

function App() {
  const doctors = [
    { name: "Dr. Juan Pérez", specialty: "Cardiología", experience: 10 },
    { name: "Dra. Ana López", specialty: "Pediatría", experience: 8 },
  ];

  const services = ["Consulta General", "Rayos X", "Laboratorio Clínico"];

  return (
    <div>
      <Header />
      <main>
        <h1>Bienvenido al Sistema del Hospital</h1>
        <DoctorList doctors={doctors} />
        <ServiceList services={services} />
        <AppointmentForm />
      </main>
    </div>
  );
}

export default App;

