import { React, useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { formatterPeso } from "../helpers";
import "react-circular-progressbar/dist/styles.css";
export default function ControlPresupuesto({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setPresupuestoValido,
}) {
  const [gastado, setGastado] = useState(0);
  const [disponible, setDisponible] = useState(presupuesto);
  const [porcentaje, setPorcentaje] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPorcentaje((gastado * 100) / presupuesto);
    }, 1000);
  }, [gastado]);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    setGastado(totalGastado);
    setDisponible(presupuesto - totalGastado);
  }, [gastos]);
  const resetApp = () => {
    const confimar = confirm("Seguro que quiere eliminar el presupuesto? ");
    if (confimar) {
      setGastos([]);
      setPresupuesto(0);
      setPresupuestoValido(false);
    }
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <CircularProgressbar
        value={porcentaje}
        maxValue={100}
        text={`${porcentaje}% Gastado`}
        styles={buildStyles({
          pathColor: porcentaje > 100 ? "#FF0000" : "#3B82F6",
          textColor: porcentaje > 100 ? "#FF0000" : "#3B82F6",
        })}
      />{" "}
      <div className="contenido-presupuesto">
        <button className="reset-app" onClick={resetApp}>
          Restear app
        </button>
        <p>
          <span>Presupuesto: </span> {formatterPeso.format(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span> {formatterPeso.format(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatterPeso.format(gastado)}
        </p>
      </div>
    </div>
  );
}
