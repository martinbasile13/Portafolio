

export default function Home({info}) {


    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className="">
                <p className="text-4xl pl-8">👋 Hola soy</p>
                <h1 className="text-8xl"><span>Martin</span></h1>
                <p className="text-3xl text-primary">Full Stack Developer en React/Django</p>
            </div>
            <div>
                <div className="ml-5">
                    {info === "dracula" && <img src="../../svg/program.svg" alt="" className="h-96" />}
                    {info === "light" && <img src="../../svg/program2.svg" alt="" className="h-96" />}
                </div>
            </div>
        </div>
    )
}