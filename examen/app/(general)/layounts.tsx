
'use client';

import React from 'react';
import Navegacion from '../../components/Navegacion';
import Presupuesto from '../../components/Presupuesto';
import ListaGastos from '../../components/ListaGastos';
import Resumen from '../../components/Resumen';

export default function Layout() {
  return (
    <div>
      <Navegacion />
      <Presupuesto />
      <ListaGastos />
      <Resumen />
    </div>
  );
}
