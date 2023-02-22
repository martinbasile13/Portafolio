

export default function Contact(){
    return(
        <div className="flex flex-wrap items-center justify-center text-center ">
            <div className="p-10 flex flex-col items-start justify-start text-start">
                <h1 className="text-5xl mb-6 ml-2">Medios de contacto</h1>
                <p className="text-2xl mt-5">Enviame un mail para consultar mis servicios</p>
                <p className="text-2xl mt-3 ">Tambien puedes contactarme en mis redes sociales</p>
                <div className="mt-6">
                  <p className="text-2xl ml-16">Redes:</p>
                  <div className="flex flex-wrap items-center justify-center text-center w-96 mt-2">
                      <a href="https://www.instagram.com/b4silee/" target="_blank">
                        <i className="fab fa-instagram icon ml-7"></i>
                      </a>
                      <a href="https://twitter.com/MartinBasile13" target="_blank">
                        <i className="fab fa-twitter icon ml-7"></i>
                      </a>
                      <a href="https://github.com/martinbasile13" target="_blank">
                        <i className="fab fa-github icon ml-7"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/martin-basile-00271023a/" target="_blank">
                        <i className="fab fa-linkedin icon ml-7"></i>
                      </a>
                  </div>
                </div>
            </div>
            
            <div className="card shrink w-full max-w-xl shadow-2xl bg-base-100 mt-10 shadow-primary">
            <h1 className="text-3xl mb-3 underline decoration-primary underline-offset-8">Contactame</h1>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Nombre</span>
                    </label>
                    <input type="text" placeholder="nombre" className="input input-bordered max-w-lg" />
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered max-w-lg" />
                    <label className="label">
                      <span className="label-text">Asunto</span>
                    </label>
                    <input type="text" placeholder="Asunto" className="input input-bordered max-w-lg" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                        <span className="label-text">Explicame que necesitas</span>
                    </label>
                    <textarea className="textarea textarea-bordered textarea-md w-fulll max-w-xl" placeholder="Explicame que necesitas"></textarea>
                  </div>
                  <div className="form-control mt-6 items-center justify-center text-center">
                    <button className="btn btn-primary max-w-xs w-64">Enviar</button>
                  </div>
                </div>
            </div>
        </div>
    )
}