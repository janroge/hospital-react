import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import EquipoMedico from "./components/EquipoMedico";
import Citas from "./components/Citas";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo-medico" element={<EquipoMedico />} />
        <Route path="/citas" element={<Citas />} />
      </Routes>
    </div>
  );
};

export default App;
