
'use client';

import React from 'react';
import { useGastos } from '../Context/context';
import FormularioGasto from './FormularioGasto';

export default function ListaGastos() {
  const { listaGastos } = useGastos();

  return (
    <div>
      <h3>Lista de Gastos</h3>
      <FormularioGasto />
      <ul>
        {listaGastos.map((gasto) => (
          <li key={gasto.id || gasto.fechaRegistro + gasto.tipo}>
            {gasto.tipo} - {gasto.cantidad} - {gasto.fechaRegistro}
          </li>
        ))}
      </ul>
    </div>
  );
}


/*
  Con este codigo queria hacer el de delete pero no lo logre por que me tiraba errores bien extranios
  
  
  // /components/ExpenseList.tsx
'use client';

import React, { useEffect } from 'react';
import { useGastos } from '../Context/context'; // Asegúrate de que este sea el path correcto
import FormularioGasto from './FormularioGasto'; // Asegúrate de que este sea el path correcto

export default function ListaGastos() {
  const { listaGastos, setListaGastos } = useGastos(); // Asegúrate de que setListaGastos esté disponible

  useEffect(() => {
    // Cargar gastos desde el back-end al montar el componente
    const cargarGastos = async () => {
      try {
        const response = await fetch('http://localhost:5000/gasto');
        const datos = await response.json();
        setListaGastos(datos); // Asegúrate de que setListaGastos esté definido en tu contexto
      } catch (error) {
        console.error('Error al cargar los gastos:', error);
      }
    };

    cargarGastos();
  }, [setListaGastos]);

  // Función para eliminar un gasto
  const manejarEliminarGasto = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/gasto/${id}`, { method: 'DELETE' });
      if (response.ok) {
        // Solo actualiza la lista local si la eliminación fue exitosa
        setListaGastos((prev) => prev.filter((gasto) => gasto.id !== id)); // Cambia 'id' por 'idgasto' si corresponde
      } else {
        console.error('Error al eliminar el gasto');
      }
    } catch (error) {
      console.error('Error en la solicitud de eliminación:', error);
    }
  };

  return (
    <div>
      <h3>Lista de Gastos</h3>
      <FormularioGasto />
      <ul>
        {listaGastos.map((gasto) => (
          <li key={gasto.id || gasto.fechaRegistro + gasto.tipo}>
            {gasto.tipo} - {gasto.cantidad} - {new Date(gasto.fechaRegistro).toLocaleDateString()}
            <button onClick={() => manejarEliminarGasto(gasto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


*/