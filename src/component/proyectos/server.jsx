
export default function Server(){
    return(
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-5" className="btn btn-primary btn-sm">Mas Info</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <figure><img src="../../imgs/server1.png" alt="" /></figure>
                <h2 className="text-3xl">FinHogar-Backend </h2>
                <p className="mb-3 text-xl">Aplicacion en nodejs.</p>
                <p className="text-xl">Este proyecto lo hice para la universidad, Se trata de una simulacion para las finanzas del hogar, Usando exprees y mysql en azure.</p>
                <div className="flex flex-wrap items-center justify-center p-3">
                    <div className="btn btn-primary btn-sm mr-10"><a href="https://gitlab.com/martinbasile13/finhogar-backend" target={"_blank"}>repositorio</a></div>
                    <div className="btn btn-primary btn-sm ml-10"><a href="https://finhogar-backend-vajzj56f0-martinbasile13.vercel.app/api" target={"_blank"}>demo</a></div>
                </div>
              </div>
            </div>
        </div>
    )
}