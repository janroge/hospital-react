import { useState } from "react";
import PropTypes from "prop-types";
import { DoctorContext } from "./DoctorContext"; // Importa el contexto creado

// Proveedor del contexto
export const DoctorProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <DoctorContext.Provider value={{ selectedDoctor, setSelectedDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};

// Validación de las props
DoctorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
