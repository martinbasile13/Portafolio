import { SocialLinks } from '../ui/SocialLinks';

export function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center text-center">
                <div className="flex flex-col items-start justify-start text-start">
                    <div className="p-10">
                        <h1 className="text-5xl mb-6 ml-2">Medios de contacto</h1>
                        <p className="text-2xl mt-5">Enviame un Email para consultar mis servicios</p>
                        <p className="text-2xl mt-3">Tambien puedes contactarme en mis Redes Sociales</p>
                    </div>
                    <div className="mt-6 w-full">
                        <p className="text-2xl mb-4 ml-14">Redes:</p>
                        <div className="flex justify-start ml-14">
                            <SocialLinks />
                        </div>
                    </div>
                </div>
                
                <div className="card shrink w-full max-w-xl shadow-2xl bg-base-100 mt-10 shadow-primary">
                    <h1 className="text-3xl m-5">El formulario de contacto está deshabilitado por el momento</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nombre</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="nombre" 
                                className="input input-bordered max-w-lg" 
                                disabled
                            />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="email" 
                                className="input input-bordered max-w-lg" 
                                disabled
                            />
                            <label className="label">
                                <span className="label-text">Asunto</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Asunto" 
                                className="input input-bordered max-w-lg" 
                                disabled
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Explicame que necesitas</span>
                            </label>
                            <textarea 
                                className="textarea textarea-bordered textarea-md w-full max-w-xl" 
                                placeholder="Explicame que necesitas"
                                disabled
                            ></textarea>
                        </div>
                        <div className="form-control mt-6 items-center justify-center text-center">
                            <button className="btn btn-primary max-w-xs w-64" disabled>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}