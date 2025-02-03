export function Home() {
    return (
        <section id="home" className="mt-10 flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center">
                <div>
                    <p className="text-5xl pl-8">👋 Hola soy</p>
                    <h1 className="text-8xl"><span>Martin</span></h1>
                    <p className="text-3xl text-primary">Full Stack Developer en ReactJS/NodeJS</p>
                </div>
                <div>
                    <div className="ml-5">
                        <img src="/svg/program.svg" alt="Programming illustration" className="h-96" />
                    </div>
                </div>
            </div>
        </section>
    );
}