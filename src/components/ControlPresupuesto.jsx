import React from "react";
const formatterPeso = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 2,
});
export default function ControlPresupuesto({ presupuesto }) {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <p>Grafica Aqui</p>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatterPeso.format(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {formatterPeso.format(presupuesto)}
        </p>
        <p>
          <span>Gastado: </span> {formatterPeso.format(presupuesto)}
        </p>
      </div>
    </div>
  );
}
