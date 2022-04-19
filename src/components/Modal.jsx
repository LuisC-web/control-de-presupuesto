import React, { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import cerrar from "../img/cerrar.svg";
import { generatorId } from "../helpers";
export const Modal = ({
  setModal,
  animationModal,
  setAnimationModal,
  gastos,
  setGastos,
  editarGasto,
  setEditarGasto,
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (Object.keys(editarGasto)) {
      setNombre(editarGasto.nombre);
      setCantidad(editarGasto.cantidad);
      setCategoria(editarGasto.categoria);
    }
  }, [editarGasto]);

  const handleModal = () => {
    setEditarGasto({});
    setTimeout(() => {
      setAnimationModal(false);
    }, 500);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  const addBills = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setError("Todos los campos son obligatorios");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    setError("");
    const gasto = {
      nombre: nombre,
      cantidad: cantidad,
      categoria: categoria,
    };
    if (Object.keys(editarGasto).length) {
      gasto.id = editarGasto.id;
      gasto.fecha = editarGasto.fecha;
      const gastoActualizado = gastos.map((gastoState) =>
        gastoState.id === editarGasto.id ? gasto : gastoState
      );
      setGastos(gastoActualizado);
      setEditarGasto("");
    } else {
      gasto.id = generatorId();
      gasto.fecha = new Date();
      setGastos([...gastos, gasto]);
    }
    setNombre("");
    setCantidad("");
    setCategoria("");
    setAnimationModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal" onClick={handleModal}>
        <img src={cerrar} alt="button de cerrar" />
      </div>
      <form className={`formulario ${animationModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
        {error && <Mensaje tipo="error">{error}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre del gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Anade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Anade cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Seccione">------ Seleccione ------</option>
            <option value="ahorro">Ahorro</option>
            <option value="casa">Casa</option>
            <option value="comida">Comida</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="sucripciones">Sucripciones</option>
            <option value="gastos">Gastos</option>
          </select>
        </div>
        <input
          type="submit"
          value="Añadir gasto"
          onClick={(e) => addBills(e)}
        />
      </form>
    </div>
  );
};
