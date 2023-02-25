

export default function Port(info){
    return(
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="btn btn-ghost w-full h-full bg-base-100 shadow-xl shadow-primary rounded-xl mt-10">
              <div className="mt-1">
                <figure><img src="../../imgs/portafolio.png" alt="" /></figure>
                <div className="">
                  <h2 className="p-2 text-xl card-title my-3 text-primary">Portafolio-app</h2>
                </div>
              </div>
            </label>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <figure><img src="../../imgs/portafolio.png" alt="" /></figure>
                <h2 className="text-3xl">Mi Portafolio</h2>
                <p className="mb-3 text-xl">Aplicacion en reactjs</p>
                <p className="text-xl">Este es un proyecto personal de mi portafolio con react y tailwindCSS</p>
                <div className="flex flex-wrap items-center justify-center p-3">
                    <div className="btn btn-primary btn-sm mr-10"><a href="https://github.com/martinbasile13/Portafolio" target={"_blank"}>repositorio</a></div>
                    <div className="btn btn-primary btn-sm ml-10"><a href="https://martin-basile.netlify.app/" target={"_blank"}>demo</a></div>
                </div>
              </div>
            </div>
        </div>
    )
}