import { useState, useEffect } from "react";
import Filtro from "./components/Filtro";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import { Modal } from "./components/Modal";
import buttonNuevoGasto from "./img/nuevo-gasto.svg";
import "./Index.css";
function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);
  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem("gastos")) ?? []
  );
  const [editarGasto, setEditarGasto] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastoFiltrado, setGastoFiltrado] = useState([]);
  useEffect(() => {
    if (presupuesto > 0) {
      setPresupuestoValido(true);
    }
  }, []);
  useEffect(() => {
    if (filtro != "") {
      console.log(filtro);
      const filtroDeGasto = gastos.filter(
        (filtroGasto) => filtroGasto.categoria === filtro
      );
      setGastoFiltrado(filtroDeGasto);
      return;
    }
  }, [filtro]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto);
  }, [presupuesto]);
  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);
  useEffect(() => {
    if (Object.keys(editarGasto).length > 0) {
      handleModal();
    }
  }, [editarGasto]);

  const eliminarGasto = (id) => {
    const nuevoGastos = gastos.filter((gastos) => gastos.id != id);
    setGastos(nuevoGastos);
  };
  const handleModal = () => {
    setModal(true);

    setTimeout(() => {
      setAnimationModal(true);
    }, 500);
  };
  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      ></Header>
      {presupuestoValido && (
        <>
          <main>
            <Filtro filtro={filtro} setFiltro={setFiltro}></Filtro>
            <ListadoGastos
              editarGasto={editarGasto}
              setEditarGasto={setEditarGasto}
              gastos={gastos}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastoFiltrado={gastoFiltrado}
            ></ListadoGastos>
          </main>
          <div className="nuevo-gasto" onClick={handleModal}>
            <img src={buttonNuevoGasto} alt="agregar icono" />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animationModal={animationModal}
          setAnimationModal={setAnimationModal}
          gastos={gastos}
          setGastos={setGastos}
          editarGasto={editarGasto}
          setEditarGasto={setEditarGasto}
        ></Modal>
      )}
    </div>
  );
}

export default App;
