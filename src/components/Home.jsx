const Home = () => {
    const serviciosDestacados = [
      { nombre: "Cardiología", descripcion: "Cuidado especializado para el corazón." },
      { nombre: "Pediatría", descripcion: "Atención médica para niños." },
      { nombre: "Traumatología", descripcion: "Diagnóstico y tratamiento de lesiones." },
    ];
  
    return (
      <div className="home">
        <h1>Bienvenido al Hospital Privado</h1>
        <p>Nos dedicamos a brindar servicios de salud de calidad con un equipo médico altamente capacitado.</p>
        <h2>Servicios Destacados</h2>
        <ul className="servicios-list">
          {serviciosDestacados.map((servicio, index) => (
            <li key={index}>
              <h3>{servicio.nombre}</h3>
              <p>{servicio.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Home;
  