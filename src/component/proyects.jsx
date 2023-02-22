import Finhogar from "./proyectos/finhogar"
import Server from "./proyectos/server"
import Dark from "./proyectos/port"

export default function Proyects(){
    return(
        <div className="flex flex-wrap p-3 items-center justify-center ">
            <div className="m-2 card card-compact w-96 bg-base-100 shadow-xl shadow-primary rounded-lg">
                <figure><img src="../assets/imgs/finhogar.png" alt="" /></figure>
                <div className="card-body">
                  <h2 className="card-title">FinHogar-app</h2>
                  <div className="card-actions justify-end">
                    <Finhogar/>
                  </div>
                </div>
            </div>
            <div className="m-2 card card-compact w-96 bg-base-100 shadow-xl shadow-primary rounded-lg">
              <figure><img src="../assets/imgs/portafolio.png" alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title">Mi Portafolio</h2>
                <div className="card-actions justify-end">
                  <Dark/>
                </div>
              </div>
            </div>
            <div className="m-2 card card-compact w-96 bg-base-100 shadow-xl shadow-primary rounded-lg">
              <figure><img src="../assets/imgs/server1.png" alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title">FinHogar-backend</h2>
                <div className="card-actions justify-end">
                  <Server/>
                </div>
              </div>
            </div>
        </div>
    )
}