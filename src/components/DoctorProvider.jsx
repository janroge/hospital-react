import PropTypes from "prop-types";
import { useState } from "react";
import { DoctorContext } from "./DoctorContext";

const DoctorProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <DoctorContext.Provider value={{ selectedDoctor, setSelectedDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;

// Validar la prop `children`
DoctorProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };