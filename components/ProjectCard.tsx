import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  let fictionalProgress: number;

  // Specific progress for each project to meet the requirements
  // All projects below 15%, with "Reconstrução Pós-Tornado" (id: 2) as the minimum.
  switch (project.id) {
    case 1: // Famílias de Rio Bonito do Iguaçu
      fictionalProgress = 12;
      break;
    case 2: // Reconstrução Pós-Tornado
      fictionalProgress = 5; // Minimum progress
      break;
    case 3: // Resgate Animal Pós-Tornado
      fictionalProgress = 9;
      break;
    default:
      // Fallback for any new projects, ensuring they are also under 15%
      fictionalProgress = (project.id * 13) % 10 + 5; // Generates a value between 5% and 14%
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-dark-gray">{project.title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
        
        <div className="mt-4">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-1 font-medium">
            <span className="animate-pulse text-secondary font-semibold">Em andamento...</span>
            <span className="font-semibold text-primary">{fictionalProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-secondary-light to-primary h-2 rounded-full"
              style={{ width: `${fictionalProgress}%` }}
            ></div>
          </div>
        </div>

        <button 
          onClick={() => onSelectProject(project)}
          className="mt-5 w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 active:opacity-80">
          Apoiar Projeto
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;