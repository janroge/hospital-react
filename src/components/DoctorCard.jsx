import PropTypes from 'prop-types';

function DoctorCard({ doctor }) {
  // Verificar si doctor está definido
  if (!doctor) {
    return <p>Información del doctor no disponible</p>;
  }

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{doctor.name}</h2>
      <p>Especialidad: {doctor.specialty}</p>
      <p>Años de Experiencia: {doctor.experience}</p>
    </div>
  );
}

// Validación de props
DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
  }),
};

export default DoctorCard;
