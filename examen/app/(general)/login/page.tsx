
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../../Estilo_globales/Button.module.css';

export default function Ingreso() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [clave, setClave] = useState('');
  const router = useRouter();

  const manejarInicioSesion = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombreUsuario === 'admin' && clave === 'admin123') {
      router.push('/Inicio'); 
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className={styles['login-container']}>
      <div className={`${styles['login-form']} card`}>
        <div className="card-body">
          <h3 className="card-title mb-4">Iniciar Sesión</h3>
          <form onSubmit={manejarInicioSesion}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Usuario"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
