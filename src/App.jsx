import { Profiler } from "react";
import Header from "./Header";
import DoctorList from "./components/DoctorList";
import DoctorDetail from "./components/DoctorDetail";
import DoctorProvider from "./components/DoctorProvider";

const App = () => {
  const onRenderCallback = (id, phase, actualDuration) => {
    console.log(`Componente ${id} (${phase}): duración real ${actualDuration}ms`);
  };

  return (
    <DoctorProvider>
      <Profiler id="App" onRender={onRenderCallback}>
        <div className="app">
          <Header />
          <Profiler id="DoctorList" onRender={onRenderCallback}>
            <DoctorList />
          </Profiler>
          <Profiler id="DoctorDetail" onRender={onRenderCallback}>
            <DoctorDetail />
          </Profiler>
        </div>
      </Profiler>
    </DoctorProvider>
  );
};

export default App;
