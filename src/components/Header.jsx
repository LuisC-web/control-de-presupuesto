import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";
export default function Header({
  presupuesto,
  setPresupuesto,
  presupuestoValido,
  setPresupuestoValido,
}) {
  return (
    <header>
      <h1>Nuevo presupuesto</h1>
      {presupuestoValido ? (
        <ControlPresupuesto presupuesto={presupuesto}></ControlPresupuesto>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setPresupuestoValido={setPresupuestoValido}
        ></NuevoPresupuesto>
      )}
    </header>
  );
}
