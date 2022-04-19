import React from "react";

const Filtro = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label htmlFor="">Filtrar Gastos</label>
          <label htmlFor="">
            <select
              value={filtro}
              onChange={(e) =>
                setFiltro(e.target.value === "seleccione" ? "" : e.target.value)
              }
            >
              <option value="seleccione">------ Seleccione ------</option>
              <option value="ahorro">Ahorro</option>
              <option value="casa">Casa</option>
              <option value="comida">Comida</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="sucripciones">Sucripciones</option>
              <option value="gastos">Gastos</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Filtro;
