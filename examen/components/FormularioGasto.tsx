
'use client';

import React, { useState } from 'react';
import { useGastos } from '../Context/context';
import { Gasto } from '../Interfaces/interface';
import styles from '../Estilo_globales/Button.module.css'; 

export default function FormularioGasto() {
  const { actualizarGastos } = useGastos();
  const [tipo, setTipo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');

  const manejarAgregarGasto = async (e: React.FormEvent) => {
    e.preventDefault();

    const nuevoGasto: Gasto = {
      id: Date.now(), 
      tipo,
      cantidad: Number(cantidad),
      fechaRegistro,
    };

    actualizarGastos((prev) => [...prev, nuevoGasto]);

    try {
      await fetch('http://localhost:5000/gasto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoGasto),
      });
    } catch (error) {
      console.error('Error al agregar gasto:', error);
    }

    setTipo('');
    setCantidad('');
    setFechaRegistro('');
  };

  return (
    <form onSubmit={manejarAgregarGasto}>
      <input
        type="text"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        placeholder="Tipo"
        required
      />
      <input
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        placeholder="Cantidad"
        required
      />
      <input
        type="date"
        value={fechaRegistro}
        onChange={(e) => setFechaRegistro(e.target.value)}
        required
      />
      <button type="submit" className={styles.button}>Agregar Gasto</button>
    </form>
  );
}
