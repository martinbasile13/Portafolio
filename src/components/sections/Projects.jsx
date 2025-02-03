import { PROJECTS } from '../../constants/projects';
import { ProjectCard } from '../ui/ProjectCard';

export function Projects() {
    return (
        <section id="projects" className="m-20 ">
            <h2 className="text-4xl font-bold text-center mb-8">Mis Proyectos</h2>
            <div className="flex flex-wrap p-3 items-center justify-center gap-6">
                {PROJECTS.map(project => (
                    <div key={project.id} className="card card-compact w-96">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
} 