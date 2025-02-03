export function About() {
    return (
        <section id="about" className="mt-20 flex items-center justify-center">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img 
                        src="/svg/coding.svg"
                        alt="Coding illustration" 
                        className="h-80"
                    />
                    <div className="flex flex-col items-start justify-start text-start">
                        <h1 className="text-5xl font-bold">Mi nombre es Martin Basile</h1>
                        <p className="py-6 text-lg">
                            Soy Programador Web Full Stack, Mi especialización es React y nodejs con express y mysql
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}