import React from 'react';
import type { Project } from '../types';
import ProjectCard from '../components/ProjectCard';

interface ProjectsScreenProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ projects, onSelectProject }) => {
  return (
    <div className="animate-fade-in">
       <header className="p-6 pt-12">
        <h1 className="text-4xl font-bold text-dark-gray">Projetos</h1>
      </header>

      <div className="p-6 pt-0 space-y-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onSelectProject={onSelectProject} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsScreen;