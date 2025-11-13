import React, { useState } from 'react';
import type { GratitudeEntry } from '../types';

interface DiaryScreenProps {
  entries: GratitudeEntry[];
  addEntry: (text: string) => void;
}

const DiaryScreen: React.FC<DiaryScreenProps> = ({ entries, addEntry }) => {
  const [newEntryText, setNewEntryText] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntryText.trim()) {
      addEntry(newEntryText);
      setNewEntryText('');
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }
  };

  return (
    <div className="min-h-full animate-fade-in">
      <header className="p-6 pt-12">
        <h1 className="text-4xl font-bold text-secondary-dark">Meu Diário</h1>
      </header>
      
      <div className="p-6 pt-0 space-y-8">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-secondary/20">
          <form onSubmit={handleSubmit}>
            <label htmlFor="gratitude-entry" className="block text-md font-semibold text-secondary-dark mb-2">
              3 coisas pelas quais sou grato(a) hoje:
            </label>
            <textarea
              id="gratitude-entry"
              rows={4}
              value={newEntryText}
              onChange={(e) => setNewEntryText(e.target.value)}
              className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
              placeholder="1. Pelo dia de hoje...&#10;2. Pela minha família...&#10;3. Por uma pequena alegria..."
            ></textarea>
            <button
              type="submit"
              className="mt-4 w-full bg-secondary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:bg-secondary/40 active:opacity-75"
              disabled={!newEntryText.trim()}
            >
              {isSaved ? 'Salvo com Sucesso!' : 'Salvar Gratidão'}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-secondary-dark mb-4 px-1">Meu Histórico</h2>
          {entries.length > 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {entries.map(entry => (
                  <li key={entry.id} className="p-4">
                    <p className="text-sm font-semibold text-secondary">{entry.date}</p>
                    <p className="text-gray-700 mt-1 whitespace-pre-wrap">{entry.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center py-8 px-4 bg-white rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-600">Seu diário está vazio.</p>
              <p className="text-sm text-gray-500 mt-1">Comece a escrever hoje para ver seu histórico aqui!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiaryScreen;