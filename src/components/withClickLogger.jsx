import PropTypes from "prop-types";

const withClickLogger = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const handleClick = (event) => {
      console.log(`Se hizo clic en el componente: ${WrappedComponent.name}`);
      if (props.onClick) {
        props.onClick(event); // Asegúrate de ejecutar la función onClick original
      }
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };

  // Asigna un nombre de pantalla al componente
  EnhancedComponent.displayName = `WithClickLogger(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  // Validación de las props
  EnhancedComponent.propTypes = {
    onClick: PropTypes.func,
  };

  return EnhancedComponent;
};

export default withClickLogger;
