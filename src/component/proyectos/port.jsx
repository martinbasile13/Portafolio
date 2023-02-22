

export default function Port(){
    return(
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="btn btn-primary btn-sm">Mas Info</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <figure><img src="../../public/imgs/portafolio.png" alt="" /></figure>
                <h2 className="text-3xl">Mi Portafolio</h2>
                <p className="mb-3 text-xl">Aplicacion en reactjs</p>
                <p className="text-xl">Este es un proyecto personal de mi portafolio con react y tailwindCSS</p>
                <div className="flex flex-wrap items-center justify-center p-3">
                    <div className="btn btn-primary btn-sm mr-10"><a href="https://github.com/martinbasile13/Home-Page-dark.git" target={"_blank"}>repositorio</a></div>
                    <div className="btn btn-primary btn-sm ml-10"><a href="https://home-page-dark.vercel.app/" target={"_blank"}>demo</a></div>
                </div>
              </div>
            </div>
        </div>
    )
}