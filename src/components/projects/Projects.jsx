import { PROJECTS } from '../../constants/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <div className="flex flex-wrap p-3 items-center justify-center">
      {PROJECTS.map(project => (
        <div key={project.id} className="m-2 card card-compact w-96">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
} 