import React, { useRef } from "react";

const Home = React.memo(function Home() {
  // Referencias para las secciones
  const serviciosRef = useRef(null);
  const informacionRef = useRef(null);

  // Función para desplazarse a una sección específica
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="hero-banner">
        <img
          src="https://via.placeholder.com/1200x400" // Imagen de ejemplo
          alt="Hero Banner"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Hospital Privado</h1>
          <p>Tu salud es nuestra prioridad</p>
        </div>
      </div>

      {/* Navegación entre secciones */}
      <nav className="home-nav">
        <button onClick={() => scrollToSection(informacionRef)}>Información del Hospital</button>
        <button onClick={() => scrollToSection(serviciosRef)}>Servicios Destacados</button>
      </nav>

      {/* Información del Hospital */}
      <section ref={informacionRef} className="home-section">
        <h1>Información del Hospital</h1>
        <p>Nos dedicamos a brindar servicios de salud de calidad con un equipo médico altamente capacitado.</p>
      </section>

      {/* Servicios Destacados */}
      <section ref={serviciosRef} className="home-section">
        <h2>Servicios Destacados</h2>
        <ul className="servicios-list">
          <li>
            <h3>Cardiología</h3>
            <p>Cuidado especializado para el corazón.</p>
          </li>
          <li>
            <h3>Pediatría</h3>
            <p>Atención médica para niños.</p>
          </li>
          <li>
            <h3>Traumatología</h3>
            <p>Diagnóstico y tratamiento de lesiones.</p>
          </li>
        </ul>
      </section>
    </>
  );
});

export default Home;
