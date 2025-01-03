import React, { useState } from "react";

const Citas = React.memo(function CitasComponent() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [error, setError] = useState("");

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
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Fecha:
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </label>
        <button type="submit">Agendar</button>
      </form>
    </>
  );
});

export default Citas;
