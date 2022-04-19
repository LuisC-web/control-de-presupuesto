import React from "react";
import Gasto from "./Gasto";
export default function ListadoGastos({
  gastos,
  editarGasto,
  setEditarGasto,
  eliminarGasto,
  filtro,
  gastoFiltrado,
}) {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>{gastoFiltrado.length ? "Gastos" : "No hay gastos"}</h2>
          {gastoFiltrado.map((gasto) => (
            <Gasto
              gasto={gasto}
              key={gasto.id}
              editarGasto={editarGasto}
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
            ></Gasto>
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              gasto={gasto}
              key={gasto.id}
              editarGasto={editarGasto}
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
            ></Gasto>
          ))}
        </>
      )}
    </div>
  );
}
