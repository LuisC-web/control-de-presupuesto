import { useState } from "react";
import Header from "./components/Header";
import buttonNuevoGasto from "./img/nuevo-gasto.svg";
import "./Index.css";
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };
  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      ></Header>
      {presupuestoValido && (
        <div className="nuevo-gasto" onClick={handleModal }>
          <img src={buttonNuevoGasto} alt="agregar icono" />
        </div>
      )}
      {modal && <p>Desde Modal</p>}
    </>
  );
}

export default App;
