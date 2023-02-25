import Finhogar from "./proyectos/finhogar"
import Server from "./proyectos/server"
import Dark from "./proyectos/port"
import ModalPro from "./modalPro"

export default function Proyects(){
    return(
        <div className="flex flex-wrap p-3 items-center justify-center ">
            <div className="m-2 card card-compact w-96">
              <Finhogar/>
            </div>
            <div className="m-2 card card-compact w-96">
              <Dark/>
            </div>
            <div className="m-2 card card-compact w-96">
              <Server/>
            </div>
        </div>
    )
}