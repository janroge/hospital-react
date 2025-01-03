import React, { useState, useEffect } from "react";

const ServiceList = React.memo(function ServiceList() {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServicios = async () => {
    try {
      const response = await fetch("/api.json");
      const data = await response.json();
      setServicios(data.servicios);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar los datos de los servicios:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicios();
  }, []);

  if (loading) {
    return <p className="loading">Cargando servicios...</p>;
  }

  return (
    <div className="service-list">
      <h2>Servicios Destacados</h2>
      <ul className="servicios-list">
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ServiceList;
