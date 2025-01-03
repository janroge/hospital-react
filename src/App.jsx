import { Profiler, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import EquipoMedico from "./components/EquipoMedico";
import Citas from "./components/Citas";
import ServiceList from "./components/ServiceList";

const App = () => {
  const [servicios, setServicios] = useState([]);

  const onRenderCallback = (id, phase, actualDuration) => {
    console.log(`Componente: ${id} | Fase: ${phase} | Duración: ${actualDuration}ms`);
  };

  // Simulamos la obtención de datos para los servicios
  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch("/api.json");
        const data = await response.json();
        setServicios(data.servicios);
      } catch (error) {
        console.error("Error al cargar los servicios:", error);
      }
    };

    fetchServicios();
  }, []);

  return (
    <div className="app">
      <Header title="Hospital Privado" />
      <Profiler id="Home" onRender={onRenderCallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/equipo-medico"
            element={
              <Profiler id="EquipoMedico" onRender={onRenderCallback}>
                <EquipoMedico />
              </Profiler>
            }
          />
          <Route
            path="/citas"
            element={<Citas onCitaAgendada={(cita) => console.log(cita)} />}
          />
          {/* Pasamos los servicios al componente ServiceList */}
          <Route
            path="/servicios"
            element={
              <Profiler id="ServiceList" onRender={onRenderCallback}>
                <ServiceList servicios={servicios} />
              </Profiler>
            }
          />
        </Routes>
      </Profiler>
    </div>
  );
};

export default App;
