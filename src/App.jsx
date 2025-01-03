import { Profiler } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import EquipoMedico from "./components/EquipoMedico";
import Citas from "./components/Citas";
import ServiceList from "./components/ServiceList";

const App = () => {
  const onRenderCallback = (id, phase, actualDuration) => {
    console.log(`Componente: ${id} | Fase: ${phase} | Duración: ${actualDuration}ms`);
  };

  return (
    <div className="app">
      <Header />
      <Profiler id="Home" onRender={onRenderCallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipo-medico" element={<Profiler id="EquipoMedico" onRender={onRenderCallback}><EquipoMedico /></Profiler>} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/servicios" element={<Profiler id="ServiceList" onRender={onRenderCallback}><ServiceList /></Profiler>} />
        </Routes>
      </Profiler>
    </div>
  );
};

export default App;
