
import React, { createContext, useContext, useState } from 'react';
import { Gasto } from '../Interfaces/interface';

interface GastoContextType {
  listaGastos: Gasto[];
  actualizarGastos: React.Dispatch<React.SetStateAction<Gasto[]>>;
  cantidadPresupuestaria: number;
  actualizarPresupuest: React.Dispatch<React.SetStateAction<number>>;
}

const GastoContext = createContext<GastoContextType | undefined>(undefined);

export const GastoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listaGastos, actualizarGastos] = useState<Gasto[]>([]);
  const [cantidadPresupuestaria, actualizarPresupuest] = useState<number>(0);

  return (
    <GastoContext.Provider value={{ listaGastos, actualizarGastos, cantidadPresupuestaria, actualizarPresupuest }}>
      {children}
    </GastoContext.Provider>
  );
};

export const useGastos = () => {
  const context = useContext(GastoContext);
  
  return context;
};
