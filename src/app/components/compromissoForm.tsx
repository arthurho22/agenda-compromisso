'use client'

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";
import { error } from "console";

interface CompromissoFormProps {
    onCompromissoAdded: () => void;
}


export default function CompromissoForm({ onCompromissoAdded }: CompromissoFormProps) {
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'compromissos'), {
                titulo, data, descricao,
            });
            setTitulo('');
            setData('');
            setDescricao('');
            onCompromissoAdded();
            console.log("Adicionado com sucesso! ");
        }
        catch (error) {
            console.error("Erro ao adicionar compromisso. ", error);

        }

    };

    return (
        <div className='m-8 p-6 bg-gray-300 rounded-lg shadow-md'>
            <h2 className='text-2x1 mb-4'>Adicionar Compromisso</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="titulo" value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className='w-full p-2 border border-gray-400 rounded' required />
                <input type="date" placeholder="Data" value={data}
                    onChange={(e) => setData(e.target.value)}
                    className='w-full p-2 border border-gray-400 rounded' required />
                <textarea placeholder="Descrição" value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    className='w-full p-2 border border-gray-400 rounded' required />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Adicionar  
                    </button>

                    
            </form>

        </div>

    )


}