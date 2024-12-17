import PropTypes from 'prop-types';
import DoctorCard from './DoctorCard';

function DoctorList({ doctors }) {
  if (!doctors || doctors.length === 0) {
    return <p>No hay doctores disponibles</p>;
  }

  return (
    <div>
      <h2>Lista de Doctores</h2>
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
  );
}

// Validación de props
DoctorList.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
      experience: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DoctorList;
