export const generatorId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36).substring(2);
  return random + fecha;
};

export const formatterPeso = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});
import React from "react";

export const fechaParseada = (fecha) => {
  const fehcaNueva = new Date(fecha);
  const opciones = { year: "numeric", month: "long", day: "2-digit" };
  return fehcaNueva.toLocaleDateString("es-Es", opciones);
};
