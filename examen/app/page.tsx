
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedireccionarALogin() {
  const router = useRouter();

  useEffect(() => {
    const autenticado = false; 
    if (!autenticado) {
      router.push('/login'); 
    } else {
      router.push('/Inicio'); 
    }
  }, [router]);

  return null;
}
