
# Hospital React Application

## Descripción del Proyecto

Este proyecto es una aplicación de gestión de un hospital construida con **ReactJS**. Incluye funcionalidades como:
- Visualización de servicios destacados.
- Listado del equipo médico con filtrado por especialidad.
- Formulario para agendar citas.
- Uso de tecnologías avanzadas como Context API, Profiler, PropTypes y simulación de APIs.

## Estructura del Proyecto

```
hospital-react/
├── public/
│   ├── api.json               # Simulación de API REST con datos de doctores y servicios
│   └── index.html             # Archivo principal de HTML
├── src/
│   ├── assets/                # Recursos estáticos (imágenes, etc.)
│   │   └── react.svg          # Imagen de ejemplo (puede ser eliminada si no se usa)
│   ├── components/            # Componentes principales de la aplicación
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── DoctorContext.jsx
│   │   ├── DoctorDetail.jsx
│   │   ├── DoctorList.jsx
│   │   ├── DoctorProvider.jsx
│   │   ├── Modal.jsx
│   │   ├── Modal.css
│   │   ├── ServiceList.jsx
│   │   └── withClickLogger.jsx # Puede eliminarse si no se utiliza
│   ├── App.css                # Estilos globales
│   ├── App.jsx                # Componente principal
│   ├── Header.jsx             # Encabezado del sitio
│   ├── index.css              # Estilos generales
│   ├── main.jsx               # Punto de entrada de React
│   └── README.md              # Archivo de documentación
├── .gitignore                 # Archivos y carpetas ignorados por Git
├── package.json               # Dependencias y scripts del proyecto
├── vite.config.js             # Configuración de Vite
└── ...
```

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd hospital-react
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre la aplicación en tu navegador en [http://localhost:5173](http://localhost:5173).

## Funcionalidades Implementadas

- **Simulación de API REST:** Los datos del equipo médico y servicios son cargados desde un archivo JSON simulado.
- **Context API:** Manejo de estado global para datos del equipo médico.
- **PropTypes:** Validación de tipos en todos los componentes.
- **Profiler:** Optimización de rendimiento para componentes clave.
- **Hooks:** Uso de `useState`, `useEffect`, y referencias (`useRef`).

## Dependencias Principales

- **ReactJS:** Biblioteca principal para construir la interfaz de usuario.
- **React Router Dom:** Manejo de rutas en la aplicación.
- **Vite:** Herramienta de construcción rápida para React.
- **PropTypes:** Validación de tipos de datos.

## Licencia

Este proyecto está bajo la licencia MIT.
