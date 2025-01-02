import { useState } from "react";
import Header from "./Header";
import DoctorList from "./components/DoctorList";
import DoctorDetail from "./components/DoctorDetail";

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <DoctorList onSelectDoctor={handleSelectDoctor} />
        <DoctorDetail doctor={selectedDoctor} />
      </div>
    </div>
  );
};

export default App;

