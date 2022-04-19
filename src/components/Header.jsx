import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";
export default function Header({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  presupuestoValido,
  setPresupuestoValido,
}) {
  return (
    <header>
      <h1>Nuevo presupuesto</h1>
      {presupuestoValido ? (
        <ControlPresupuesto
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setPresupuestoValido={setPresupuestoValido}
        ></ControlPresupuesto>
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
