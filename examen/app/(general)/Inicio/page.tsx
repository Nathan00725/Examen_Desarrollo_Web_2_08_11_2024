
'use client';

import { GastoProvider } from '../../../Context/context';
import Layout from '../layounts';

export default function PaginaInicio() {
  return (
    <GastoProvider>
      <Layout />
    </GastoProvider>
  );
}
