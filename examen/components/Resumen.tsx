
'use client';

import React from 'react';
import { useGastos } from '../Context/context';

export default function Resumen() {
  const { listaGastos, cantidadPresupuestaria } = useGastos();
  const totalGastado = listaGastos.reduce((total, gasto) => total + gasto.cantidad, 0);

  return (
    <div>
      <h3>Resumen de Gastos</h3>
      <p>Total Gastado: {totalGastado}</p>
      <p>Restante del Presupuesto: {cantidadPresupuestaria - totalGastado}</p>
      {totalGastado > cantidadPresupuestaria && (
        <div style={{ color: 'red' }}>
          Has superado el límite del presupuesto, debes ajustar gastos.
        </div>
      )}
    </div>
  );
}
