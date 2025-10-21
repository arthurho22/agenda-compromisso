'use client';

import {useState, useEffect, useCallback} from 'react';
import { db } from '@/lib/firebaseconfig';
import{ collection, getDocs } from 'firebase/firestore';
import dynamic from 'next/dynamic';
import CompromissoForm from './components/compromissoForm';

const Calendario = dynamic(() => import('./components/calendario'), {
    ssr: false,
});

interface CalendarioProps {
    titulo: string;
    data: string;
    descricao: string;
}

export default function Home() {
  const [compromissos, setCompromissos] = useState<CalendarioProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCompromissos = useCallback(async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'compromissos'));
      const compromissosData: CalendarioProps[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        compromissosData.push({
          titulo: data.titulo,
          data: data.data,
          descricao: data.descricao,
        });
      });
      setCompromissos(compromissosData);
    } catch (error) {
      console.error("Erro ao buscar compromissos: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className='min-h-screen bg-blue-200 flex flex-col items-center p-8'>
      <div className='w-full max-w-5xl'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Agenda de Compromissos</h1>
        <CompromissoForm onCompromissoAdded={fetchCompromissos} />

      </div>
    
    </div>
  );
}
