import React, { useState, useRef, useEffect } from "react";

const Citas = React.memo(function CitasComponent() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [error, setError] = useState("");

  // Referencia para el campo de entrada "Nombre"
  const nombreRef = useRef(null);

  // Efecto para enfocar automáticamente en el campo "Nombre"
  useEffect(() => {
    nombreRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !fecha) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    setError("");
    alert(`Cita agendada para ${nombre} el ${fecha}`);
  };

  return (
    <>
      <h1>Agendar Cita</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label>
          Nombre:
          <input
            ref={nombreRef} // Asignar la referencia al campo de entrada
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Fecha:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>
        <button type="submit">Agendar</button>
      </form>
    </>
  );
});

Citas.displayName = "CitasComponent";

export default Citas;
