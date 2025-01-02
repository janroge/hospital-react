# Proyecto del Hospital - ReactJS

Este proyecto es parte de la **Evaluación M4 - Ejercicio Práctico 2**, donde se implementa una aplicación React para manejar funcionalidades específicas relacionadas con un sistema hospitalario. Se realizaron los siguientes puntos según lo solicitado en el archivo PDF:

---

## Características Implementadas

### 1. Manejo del DOM Virtual
- Se utiliza React para gestionar eficientemente el DOM virtual.
- Los componentes se renderizan dinámicamente según los datos.

### 2. Referencias en React
- Uso de referencias (`useRef`) para manipular directamente elementos del DOM.
- Ejemplo: Enfocar automáticamente un campo en el formulario de citas.

### 3. Fragmentos y Contexto
- Uso de `<React.Fragment>` para evitar elementos innecesarios en el DOM.
- Implementación de un contexto global (`DoctorContext`) para compartir datos entre componentes como la selección de un doctor.

### 4. Verificación de Tipos con PropTypes
- Validación de props en todos los componentes principales (`DoctorCard`, `DoctorList`, `AppointmentForm`, etc.).
- PropTypes asegura que los datos enviados a los componentes tengan los tipos correctos.

### 5. Componentes de Orden Superior (HOC) y Portales
- Creación de un HOC (`withClickLogger`) para registrar clics en componentes.
- Uso de portales (`Modal`) para mostrar un modal con detalles del doctor seleccionado.

### 6. Optimización de Rendimiento
- Uso de `React.memo` para evitar renders innecesarios en componentes clave como `DoctorCard` y `DoctorList`.
- Implementación del `Profiler` para medir tiempos de renderización y detectar cuellos de botella.

---

## Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── AppointmentForm.jsx  # Formulario para agendar citas
│   ├── DoctorCard.jsx       # Tarjetas individuales de doctores
│   ├── DoctorContext.jsx    # Contexto global para la aplicación
│   ├── DoctorDetail.jsx     # Detalles del doctor seleccionado
│   ├── DoctorList.jsx       # Listado de doctores
│   ├── DoctorProvider.jsx   # Proveedor del contexto
│   ├── Modal.jsx            # Modal implementado con Portales
│   ├── ServiceList.jsx      # Listado de servicios
│   └── withClickLogger.jsx  # HOC para registrar clics
│
├── App.jsx                  # Componente principal
├── App.css                  # Estilos principales
├── index.css                # Estilos globales
├── main.jsx                 # Punto de entrada
└── Modal.css                # Estilos para el modal
```

---

## Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/janroge/hospital-react.git
   cd hospital-react
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir la aplicación:**
   - URL: `http://localhost:5173`

---