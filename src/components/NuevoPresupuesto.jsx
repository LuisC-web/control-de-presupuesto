import { React, useState } from "react";
import Mensaje from "./Mensaje";
function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  setPresupuestoValido,
}) {
  const [mensaje, setMensaje] = useState("");
  const addBudget = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto <= 0) {
      setMensaje("No es valido");
      return;
    }
    setMensaje("");
    setPresupuestoValido(true);
    console.log("Es valido");
  };
  return (
    <div className="contenedor contenedor-presupuesto sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="define-presupuesto">Define presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            id="define-presupuesto"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" onClick={(e) => addBudget(e)} />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
