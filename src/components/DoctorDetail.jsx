import { useContext, useState } from "react";
import { DoctorContext } from "./DoctorContext";
import Modal from "./Modal";

const DoctorDetail = () => {
  const { selectedDoctor } = useContext(DoctorContext); // Usamos el contexto
  const [isModalOpen, setModalOpen] = useState(false);

  if (!selectedDoctor) {
    return <p>Selecciona un doctor para ver los detalles.</p>;
  }

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Ver Detalles</button>

      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <h2>Detalles del Doctor</h2>
          <p><strong>Nombre:</strong> {selectedDoctor.nombre}</p>
          <p><strong>Especialidad:</strong> {selectedDoctor.especialidad}</p>
          <p><strong>Disponibilidad:</strong> {selectedDoctor.disponibilidad.join(", ")}</p>
        </Modal>
      )}
    </div>
  );
};

export default DoctorDetail;
