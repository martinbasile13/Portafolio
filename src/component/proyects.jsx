import Finhogar from "./proyectos/finhogar"
import Server from "./proyectos/server"
import Port from "./proyectos/port"

export default function Proyects(info){
    return(
        <div className="flex flex-wrap p-3 items-center justify-center ">
            <div className="m-2 card card-compact w-96">
              <Finhogar info={info}/>
            </div>
            <div className="m-2 card card-compact w-96">
              <Port info={info}/>
            </div>
            <div className="m-2 card card-compact w-96">
              <Server info={info}/>
            </div>
        </div>
    )
}