

export default function Finhogar(){
    return(
      <div>
          {/* The button to open modal */}
          <label htmlFor="my-modal-3" className="btn w-full h-full bg-base-100 shadow-xl shadow-primary rounded-xl mt-10">
            <div className="mt-1">
              <figure><img src="../../imgs/finhogar.png" alt="" /></figure>
              <div className="">
                <h2 className="p-2 text-xl card-title my-3 text-primary">FinHogar-app</h2>
              </div>
            </div>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <figure><img src="../../imgs/finhogar.png" alt="" /></figure>
              <h2 className="text-3xl">FinHogar-app</h2>
              <p className="mb-3 text-xl">Aplicacion Full Stack en reactjs y nodejs.</p>
              <p className="text-xl">Este proyecto lo hice para la universidad, Se trata de una simulacion para las finanzas del hogar, usando React y taiwindcss en el FrontEnd y node, exprees y mysql en el BackEnd .</p>
              <div className="flex flex-wrap items-center justify-center p-3">
                  <div className="btn btn-primary btn-sm mr-10"><a href="https://gitlab.com/martinbasile13/finhogar-frontend" target={"_blank"}>repositorio</a></div>
                  <div className="btn btn-primary btn-sm ml-10"><a href="https://finhogar-frontend.vercel.app/" target={"_blank"}>demo</a></div>
              </div>
            </div>
          </div>
      </div>
    )
}