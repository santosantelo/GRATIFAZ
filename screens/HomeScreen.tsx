import React, { useState, useEffect } from 'react';
import type { View } from '../types';
import Logo from '../components/Logo';

const BIBLE_VERSES = [
  { text: "O Senhor é o meu pastor; de nada terei falta.", verse: "Salmos 23:1" },
  { text: "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.", verse: "João 3:16" },
  { text: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.", verse: "1 Coríntios 13:4" },
  { text: "Deleite-se no Senhor, e ele atenderá aos desejos do seu coração.", verse: "Salmos 37:4" }
];

interface HomeScreenProps {
  setActiveView: (view: View) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setActiveView }) => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex(prevIndex => (prevIndex + 1) % BIBLE_VERSES.length);
    }, 7000); 

    return () => clearInterval(interval); 
  }, []);

  const currentVerse = BIBLE_VERSES[currentVerseIndex];

  return (
    <div className="min-h-full flex flex-col animate-fade-in">
      <header className="p-6 pt-12">
        <h1 className="text-4xl font-bold text-dark-gray">Início</h1>
      </header>

      <div className="p-6 pt-0 space-y-6 flex-1">
        <div className="rounded-2xl shadow-sm p-[2px] bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_200%] animate-gradient-border">
          <div className="bg-white rounded-[14px] p-6 text-center">
            <h2 className="text-md font-semibold text-gray-500">Nosso Impacto Recente</h2>
            <p className="text-3xl font-bold text-primary my-2 leading-tight">Rio Bonito do Iguaçu</p>
            <p className="text-gray-600">Um tornado devastou a cidade. Junte-se a nós na reconstrução.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => setActiveView('projects')}
            className="w-full bg-primary text-white font-bold py-4 px-4 rounded-xl hover:opacity-90 transition-opacity duration-200 shadow-md shadow-primary/30 active:opacity-75"
          >
            Apoiar Projetos
          </button>
          <button 
            onClick={() => setActiveView('diary')}
            className="w-full bg-secondary text-white font-bold py-4 px-4 rounded-xl hover:opacity-90 transition-opacity duration-200 shadow-md shadow-secondary/30 active:opacity-75"
          >
            Meu Diário Gratifaz
          </button>
        </div>
        
        <div className="bg-secondary/10 border-l-4 border-secondary text-secondary-dark p-4 rounded-r-lg shadow-sm min-h-[110px] flex flex-col justify-center">
           <div key={currentVerseIndex} className="transition-opacity duration-1000 ease-in-out">
            <p className="italic">"{currentVerse.text}"</p>
            <p className="text-right text-sm font-semibold text-secondary-dark mt-2">- {currentVerse.verse}</p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm pt-4">
          <p>Um projeto com o objetivo de trazer luz para o mundo! 💡</p>
          <p className="mt-1">💜 | Founder <a href="https://www.instagram.com/_nicolesantacruz" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">@_nicolesantacruz</a></p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;