

export default function About({info}) {
    return(
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
              {info === "dracula" && <img src="../../svg/coding.svg" alt="" className="h-80" />}
              {info === "light" && <img src="../../svg/coding2.svg" alt="" className="h-90" />}
            <div className="flex flex-col items-start justify-start text-start">
              <h1 className="text-5xl font-bold">Mi nombre es Martin Basile</h1>
              <p className="py-6 text-lg">Soy Programador Web Full Stack, Mi especializacion es React y Django Rest Framework</p>
            </div>
          </div>
        </div>
    )
}