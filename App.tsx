import React, { useState, useEffect } from 'react';
import type { View, Project, GratitudeEntry } from './types';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ContributeScreen from './screens/ContributeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import DiaryScreen from './screens/DiaryScreen';
import NewsScreen from './screens/MediaScreen';
import SplashScreen from './screens/SplashScreen';
import { HeartIcon } from './components/Icons';

// Project Detail Modal Component
interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
  onContribute: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onContribute }) => {
  return (
    <div
      className="fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <div
        className="relative m-0 sm:m-4 p-6 bg-gray-50 rounded-t-3xl sm:rounded-2xl shadow-lg w-full max-w-md"
        style={{ animation: 'slideUp 0.3s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          @media (min-width: 640px) {
            @keyframes slideUp {
              from { transform: translateY(20px) scale(0.95); opacity: 0; }
              to { transform: translateY(0) scale(1); opacity: 1; }
            }
          }
        `}</style>

        <button onClick={onClose} className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 rounded-full transition-colors" aria-label="Fechar modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        
        <h2 id="project-detail-title" className="text-2xl font-bold text-dark-gray pr-8">{project.title}</h2>
        
        <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            <div>
              <h3 className="font-semibold text-primary-dark text-lg">Descrição</h3>
              <p className="text-gray-600 mt-1">{project.description}</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-dark text-lg">Propósito</h3>
              <p className="text-gray-600 mt-1">{project.purpose}</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-dark text-lg">Nossa Missão</h3>
              <p className="text-gray-600 mt-1">{project.mission}</p>
            </div>
        </div>
        
        <div className="mt-6">
            <button 
              onClick={onContribute}
              className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity active:opacity-75"
            >
              <HeartIcon className="w-6 h-6" />
              <span>Apoiar este Projeto</span>
            </button>
        </div>
      </div>
    </div>
  );
};


// Mock Data
const MOCK_PROJECTS: Project[] = [
  { 
    id: 1, 
    title: "Famílias de Rio Bonito do Iguaçu", 
    description: "Ajude as famílias desabrigadas pelo tornado em Rio Bonito do Iguaçu (PR) com cestas básicas, água potável e kits de higiene.", 
    purpose: "Prover auxílio imediato e essencial para as famílias que perderam seus lares e bens devido ao tornado, garantindo que tenham acesso a alimentos, água limpa e itens de higiene pessoal.",
    mission: "Nossa missão é mobilizar recursos e voluntários para aliviar o sofrimento das vítimas da tragédia, oferecendo suporte material e esperança durante o processo de recuperação.",
    goal: 25000, 
    current: 1750, 
    urgent: true 
  },
  { 
    id: 2, 
    title: "Reconstrução Pós-Tornado", 
    description: "Apoie a reconstrução das casas de famílias que perderam tudo com a passagem do tornado. Doe materiais ou qualquer valor.", 
    purpose: "Auxiliar na reconstrução de moradias seguras e dignas para as famílias desabrigadas, permitindo que retomem suas vidas com estabilidade.",
    mission: "Arrecadar fundos e materiais de construção, além de coordenar esforços de voluntariado, para reerguer as casas destruídas e devolver um lar para quem mais precisa.",
    goal: 50000, 
    current: 4200 
  },
  { 
    id: 3, 
    title: "Resgate Animal Pós-Tornado", 
    description: "Resgate e cuidado para os animais de Rio Bonito do Iguaçu afetados pelo tornado. Precisamos de ração, medicamentos e voluntários.", 
    purpose: "Garantir o bem-estar dos animais domésticos e de rua que foram feridos, abandonados ou se perderam durante o tornado, oferecendo cuidados veterinários e abrigo temporário.",
    mission: "Atuar no resgate, tratamento e realocação de animais afetados, além de fornecer suporte com ração e medicamentos para os tutores que enfrentam dificuldades.",
    goal: 12000, 
    current: 950
  },
];

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeView, setActiveView] = useState<View>('home');
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectForContribute, setSelectedProjectForContribute] = useState<Project | undefined>(undefined);
  const [gratitudeEntries, setGratitudeEntries] = useState<GratitudeEntry[]>([]);
  const [selectedProjectForDetail, setSelectedProjectForDetail] = useState<Project | null>(null);

  // Load data from localStorage on initial render
  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem('gratifaz_projects');
      if (storedProjects) {
        setProjects(JSON.parse(storedProjects));
      } else {
        setProjects(MOCK_PROJECTS); // Initialize with mock data if nothing is stored
      }

      const storedEntries = localStorage.getItem('gratifaz_gratitudeEntries');
      if (storedEntries) {
        setGratitudeEntries(JSON.parse(storedEntries));
      }
    } catch (error) {
      console.error("Failed to load data from localStorage", error);
      setProjects(MOCK_PROJECTS);
      setGratitudeEntries([]);
    }
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('gratifaz_projects', JSON.stringify(projects));
    }
  }, [projects]);

  // Save gratitude entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('gratifaz_gratitudeEntries', JSON.stringify(gratitudeEntries));
  }, [gratitudeEntries]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  const addGratitudeEntry = (text: string) => {
    const newEntry: GratitudeEntry = {
      id: new Date().toISOString(),
      date: new Date().toLocaleDateString('pt-BR'),
      text: text,
    };
    setGratitudeEntries(prev => [newEntry, ...prev]);
  };

  const handleDonate = (projectId: number, amount: number) => {
    setProjects(prevProjects =>
      prevProjects.map(p =>
        p.id === projectId ? { ...p, current: p.current + amount } : p
      )
    );
  };

  const handleViewChange = (view: View) => {
    if (view === 'contribute') {
      const urgentProject = projects.find(p => p.urgent);
      setSelectedProjectForContribute(urgentProject);
    }
    setActiveView(view);
  };
  
  const handleShowProjectDetail = (project: Project) => {
    setSelectedProjectForDetail(project);
  };

  const handleContributeFromDetail = () => {
    if (selectedProjectForDetail) {
      setSelectedProjectForContribute(selectedProjectForDetail);
      setActiveView('contribute');
      setSelectedProjectForDetail(null);
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeScreen setActiveView={handleViewChange} />;
      case 'contribute':
        return <ContributeScreen 
                  project={selectedProjectForContribute} 
                  onDonate={handleDonate} 
                />;
      case 'projects':
        return <ProjectsScreen projects={projects} onSelectProject={handleShowProjectDetail} />;
      case 'news':
        return <NewsScreen />;
      case 'diary':
        return <DiaryScreen entries={gratitudeEntries} addEntry={addGratitudeEntry} />;
      default:
        return <HomeScreen setActiveView={handleViewChange} />;
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md h-full bg-gray-50 shadow-lg flex flex-col relative overflow-hidden">
        <SplashScreen isVisible={showSplash} />
        
        {selectedProjectForDetail && (
          <ProjectDetailModal 
            project={selectedProjectForDetail}
            onClose={() => setSelectedProjectForDetail(null)}
            onContribute={handleContributeFromDetail}
          />
        )}

        {!showSplash && (
          <>
            <main className="flex-1 overflow-y-auto pb-20">
              {renderView()}
            </main>
            <BottomNav activeView={activeView} setActiveView={handleViewChange} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;