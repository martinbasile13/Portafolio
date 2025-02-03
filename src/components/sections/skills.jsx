export function Skills() {
    return (
        <section id="skills" className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Habilidades</h2>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col md:flex-row gap-16">
                        {/* Frontend Skills */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold mb-6">Front End</h2>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-4">
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/html.svg" alt="HTML5" className="mr-2" /> Html5
                                        </kbd>
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/css.svg" alt="CSS" className="mr-2" /> CSS
                                        </kbd>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-lg font-semibold">Frameworks CSS</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/tailwind.svg" alt="TailwindCSS" className="mr-2" /> TailwindCSS
                                        </kbd>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-lg font-semibold">Lenguajes</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/javascript.svg" alt="JavaScript" className="mr-2" /> JavaScript
                                        </kbd>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-lg font-semibold">Framework</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/react.svg" alt="React" className="mr-2" /> React JS
                                        </kbd>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold mb-6">Back End</h2>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-4">
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/git.svg" alt="Git" className="mr-2" /> Git
                                        </kbd>
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/bash.svg" alt="Shell" className="mr-2" /> Shell
                                        </kbd>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-lg font-semibold">Bases de datos</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/mysql.svg" alt="MySQL" className="mr-2" /> MySQL
                                        </kbd>
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/postgresql.svg" alt="PostgreSQL" className="mr-2" /> PostgreSQL
                                        </kbd>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-lg font-semibold">Lenguajes</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/javascript.svg" alt="JavaScript" className="mr-2" /> JavaScript
                                        </kbd>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-lg font-semibold">Framework</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <kbd className="kbd kbd-md">
                                            <img src="/icons/nodejs.svg" alt="Node.js" className="mr-2" /> Node.js
                                        </kbd>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}