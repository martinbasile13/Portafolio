import { Modal } from './Modal';

export function ProjectCard({ project }) {
    return (
        <div>
            <label 
                htmlFor={`modal-${project.id}`} 
                className="btn btn-ghost w-full h-full bg-base-100 shadow-xl shadow-primary rounded-xl mt-10"
            >
                <div className="mt-1">
                    <figure>
                        <img src={project.image} alt={project.title} />
                    </figure>
                    <div>
                        <h2 className="p-2 text-xl card-title my-3">{project.title}</h2>
                    </div>
                </div>
            </label>

            <Modal id={`modal-${project.id}`}>
                <figure>
                    <img src={project.image} alt={project.title} />
                </figure>
                <h2 className="text-3xl">{project.title}</h2>
                <p className="mb-3 text-xl">{project.description}</p>
                <p className="text-xl">{project.longDescription}</p>
                <div className="flex flex-wrap items-center justify-center p-3">
                    <div className="btn btn-primary btn-sm mr-10">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            repositorio
                        </a>
                    </div>
                    <div className="btn btn-primary btn-sm ml-10">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            demo
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
} 