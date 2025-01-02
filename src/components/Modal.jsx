import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Modal.css";


const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") // Contenedor fuera del DOM principal
  );
};

// Validación de las props
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
