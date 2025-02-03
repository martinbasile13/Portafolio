export function ProjectCard({ project }) {
  return (
    <div>
      <label htmlFor={`modal-${project.id}`} className="btn btn-ghost w-full h-full bg-base-100 shadow-xl shadow-primary rounded-xl mt-10">
        <div className="mt-1">
          <figure><img src={project.image} alt={project.title} /></figure>
          <div>
            <h2 className="p-2 text-xl card-title my-3">{project.title}</h2>
          </div>
        </div>
      </label>
      <ProjectModal project={project} />
    </div>
  );
} 