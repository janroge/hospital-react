# Proyecto del Hospital - ReactJS

Este proyecto implementa una aplicación web simple usando **ReactJS**. Contiene componentes reutilizables como tarjetas de doctores, una lista de servicios y un formulario interactivo para agendar citas.

---

## 🚀 Características

1. **DoctorCard**: Componente que muestra información de un doctor, incluyendo nombre, especialidad y años de experiencia.
2. **ServiceList**: Componente que renderiza una lista de servicios médicos.
3. **AppointmentForm**: Formulario que permite agendar citas, manejado con el hook `useState`.
4. **Validación de Props**: Uso de `PropTypes` para garantizar la integridad de las props.
5. **Renderizado Dinámico**: Implementación de `map()` para listas de datos.

---

## 🛠️ Tecnologías Utilizadas

- **ReactJS**: Biblioteca para interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápido.
- **PropTypes**: Validación de props.
- **CSS**: Estilizado básico.

---

## 📊 Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── DoctorCard.jsx      # Componente para tarjeta de doctor
│   ├── DoctorList.jsx      # Lista de tarjetas de doctores
│   ├── ServiceList.jsx     # Componente para la lista de servicios
│   └── AppointmentForm.jsx # Formulario para agendar citas
│
├── App.jsx                 # Componente principal
└── main.jsx                # Punto de entrada
```

---

## 🛠️ Instalación y Ejecución

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/hospital-react.git
   cd hospital-react
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre la aplicación en el navegador**:
   ```plaintext
   http://localhost:5173
   ```

---

## 📚 Uso del Proyecto

### Formulario de Citas
Completa los campos del formulario (nombre del paciente, doctor y fecha) y haz clic en "Agendar Cita". Los datos ingresados se mostrarán en la consola del navegador.

Ejemplo:
```plaintext
Datos del formulario: { patientName: "Juan Pérez", doctorName: "Dr. López", appointmentDate: "2024-06-07" }
```

---

## 💳 Licencia

Este proyecto está bajo la licencia **MIT**.

---

## 👤 Autor

- **Nombre**: Jorge Rojas
- **Curso**: Módulo 4 - Front End con React
- **Repositorio GitHub**: [Enlace al repositorio](https://github.com/janroge/hospital-react)
