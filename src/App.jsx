import Header from "./Header";
import DoctorList from "./components/DoctorList";
import DoctorDetail from "./components/DoctorDetail";
import DoctorProvider from "./components/DoctorProvider";

const App = () => {
  return (
    <DoctorProvider>
      {/* Envolvemos nuestra app con el contexto */}
      <div className="app">
        <Header />
        <div className="content">
          <DoctorList />
          <DoctorDetail />
        </div>
      </div>
    </DoctorProvider>
  );
};

export default App;
