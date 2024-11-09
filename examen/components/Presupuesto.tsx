
'use client';
import styles from '../Estilo_globales/Button.module.css'; 
import React, { useState, useEffect } from 'react';
import { useGastos } from '../Context/context';

export default function Presupuesto() {
  const { cantidadPresupuestaria, actualizarPresupuest, listaGastos } = useGastos();
  const [inputValor, setInputValor] = useState('');

  useEffect(() => {
    const totalGastado = listaGastos.reduce((total, gasto) => total + gasto.cantidad, 0);
    
    // Comprobar si se alcanzó el 80% del presupuesto
    if (totalGastado >= cantidadPresupuestaria * 0.8 && totalGastado < cantidadPresupuestaria) {
      alert('¡Has alcanzado el 80% de tu presupuesto!');
    }
    
    // Comprobar si se ha superado el presupuesto
    if (totalGastado >= cantidadPresupuestaria) {
      alert('Has superado el límite del presupuesto, debes ajustar gastos.');
    }
  }, [listaGastos, cantidadPresupuestaria]);

  const manejarEstablecerPresupuesto = () => {
    if (!isNaN(Number(inputValor)) && Number(inputValor) > 0) {
      actualizarPresupuest(Number(inputValor));
      setInputValor('');
    } else {
      alert('Por favor, introduce un número válido para el presupuesto.');
    }
  };

  return (
    <div>
      <h3>Presupuesto Mensual: {cantidadPresupuestaria}</h3>
      <input
        type="number"
        value={inputValor}
        onChange={(e) => setInputValor(e.target.value)}
        placeholder="Establecer Presupuesto"
      />
      <button className={styles.button} onClick={manejarEstablecerPresupuesto}>Guardar</button>
    </div>
  );
}
